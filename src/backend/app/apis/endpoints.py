import time
import threading
from random import choice
from string import ascii_letters, digits
from flask import jsonify, request
from werkzeug.utils import secure_filename

from app.apis import api
from app import global_task_queue
from app.tasks import Task, get_task
from app.apis.summarize import *
from app.apis.language_processing import *


@api.route("/text_summary")
def summary_text():
    text = request.args.get('text')
    if text is None or len(text) == 0:
        raise Exception("InvalidArgument", "text is required")

    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))

    global_task_queue.append(Task(task_id=task_id))
    task = threading.Thread(target=text_summary, args=(text, task_id, ))
    task.start()

    return jsonify({"task_id": task_id})


@api.route("/website_summary")
def summary_website():
    url = request.args.get('url')
    if url is None or len(url) == 0:
        raise Exception("InvalidArgument", "url is required")

    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))

    global_task_queue.append(Task(task_id=task_id))
    task = threading.Thread(target=website_summary, args=(url, task_id,))
    task.start()

    return jsonify({"task_id": task_id})


@api.route("/youtube_summary")
def summary_youtube():
    url = request.args.get('url')
    if url is None or len(url) == 0:
        raise Exception("InvalidArgument", "url is required")

    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))

    global_task_queue.append(Task(task_id=task_id))
    task = threading.Thread(target=youtube_summary, args=(url, task_id,))
    task.start()

    return jsonify({"task_id": task_id})


@api.route("/file_summary", methods=['POST'])
def summary_file():
    file = request.files['files']
    if not os.path.exists("temp_downloads"):
        os.mkdir("temp_downloads")

    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))

    filename = secure_filename(file.filename)
    file.save(os.getcwd() + f'/temp_downloads/{filename}')

    global_task_queue.append(Task(task_id=task_id))
    task = threading.Thread(target=file_summary, args=(filename, task_id,))
    task.start()

    return jsonify({"task_id": task_id})


@api.route("/generate_questions")
def question_generate():
    text = request.args.get("text")
    if text is None or text == "":
        raise Exception("InvalidArgument", "text is required")

    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))

    global_task_queue.append(Task(task_id=task_id))
    task = threading.Thread(target=generate_questions, args=(text, task_id,))
    task.start()

    return jsonify({"task_id": task_id})


@api.route("/get_status")
def test_status():
    task_id = request.args.get("task_id")
    if task_id is None:
        raise Exception("InvalidArgument", "task_id is required")

    task = get_task(task_id)
    if task.error:
        global_task_queue.remove(task)
        return jsonify({"error": task.error_message})

    if task.status == 'done':
        global_task_queue.remove(task)
        return jsonify({"status": task.status, "result": task.content})

    return jsonify({"status": task.status})
