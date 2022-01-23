import random

import nltk
import requests
from flask import request, jsonify
import re

from app import openIE_model
from app.apis import api
from app.tasks import get_task


def negate(sentence):
    """
    Takes a sentence and randomly creates the negative of it
    Used for true or false questions
    :param sentence:
    :return:
    """
    tokens = nltk.word_tokenize(sentence)
    tagged = nltk.pos_tag(tokens)
    constructed_sentence = ""
    negate = True if random.random() > 0.5 else False
    is_negatable = False

    # print(tagged)
    for word in tagged:
        if word[1] == "DT":
            if negate:
                constructed_sentence += "not "
            constructed_sentence += f"{word[0]} "
            is_negatable = True
        elif word[1] == "VBD":
            constructed_sentence += f"{word[0]} "
            if negate:
                constructed_sentence += f"not "
            is_negatable = True
        elif word[1] == "WDT":
            constructed_sentence += f"{word[0]} "
            if negate:
                constructed_sentence += f"does not "
            is_negatable = True
        else:
            constructed_sentence += f"{word[0]} "

    if is_negatable:
        return {"question": f"True or False: {constructed_sentence}", "answer": "False" if negate else "True"}
    else:
        return None


def generate_questions(text, task):
    question_n_answers = []

    task.status = 'generating questions'
    for sentence in text.split("."):
        prediction = openIE_model.predict(sentence)
        for p in prediction["verbs"]:
            verb = ""
            arguments = []

            for match in re.findall(r"\[([^\[\]]+)\]", p['description']):
                if len(match.split(":")) == 2:
                    arg_type, arg_clause = match.split(":")
                    # Extract only verbs and arguments of type ARG{INT}
                    if arg_type == 'V':
                        verb = arg_clause
                    elif len(arg_type) == 4 and arg_type[:3] == 'ARG' and arg_type[3].isdigit():
                        arguments.append((arg_type, arg_clause))

            arguments = sorted(arguments, key=lambda x: x[0])
            if len(arguments) > 1:
                # Concat second -> last arguments into single string. Answer is the first argument
                question_n_answers.append(({"question": f"What/who{verb}{''.join([arg[1] for arg in arguments[1:]])}", "answer": arguments[0][1]}))

        if negate(sentence) is not None:
            question_n_answers.append(negate(sentence))

    task.status = 'generating more questions'
    generated = requests.post("https://devpy.lumoslearning.com/llp/darshan/Jul20/question-answer-bert-gpt/question_generation/question_bert.php",
                              json={"text": text}).json()

    if "result" in generated:
        question_n_answers = generated["result"] + question_n_answers

    task.status = 'done'
    return question_n_answers
