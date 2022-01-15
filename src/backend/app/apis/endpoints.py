from flask import request, jsonify, Blueprint
import requests
from bs4 import BeautifulSoup
from bs4.element import Comment

from app import GPT2_model

api = Blueprint('api', __name__, url_prefix='/api')


PUNCTUATIONS = ".?!,;:()'\"/+-*&^%$#@ "


def tag_visible(element):
    if element.parent.name in ['style', 'script', 'head', 'title', 'meta', '[document]']:
        return False
    if isinstance(element, Comment):
        return False
    return True


def clean_text(text):
    cleaned_text = ""
    formatted_text = ""
    text = text.replace("\n", "")

    # Remove random characters/non-english characters
    for index, char in enumerate(text):
        if char.isascii() and (char.isalpha() or char in PUNCTUATIONS):
            cleaned_text += char

    # Remove any misformatted numbers
    for index, char in enumerate(cleaned_text):
        if char.isdigit():
            if (index > 0 and cleaned_text[index - 1] != '.') or (index < len(cleaned_text) - 1 and cleaned_text[index + 1].isdigit()):
                formatted_text += char
        else:
            formatted_text += char

    return formatted_text


@api.route('/text_summary')
def text_summary():
    text = request.args.get('text')
    if text is None or len(text) == 0:
        raise Exception("InvalidArgument", "text is required")

    return jsonify({"summary": ''.join(GPT2_model(text))})


@api.route('/website_summary')
def website_summary():
    url = request.args.get('url')
    if url is None or len(url) == 0:
        raise Exception("InvalidArgument", "url is required")

    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
        "X-Amzn-Trace-Id": "Root=1-61e29364-4e0ba3d6238d5c515e652b2c"
    }

    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        raise Exception("WebsiteError", "Unable to fetch website")

    soup = BeautifulSoup(response.text, 'html.parser')
    p_tags = soup.find_all('p')
    texts = [tag.get_text() for tag in p_tags]
    cleaned_texts = ''.join(list(map(clean_text, texts)))

    return jsonify({"summary": ''.join(GPT2_model(cleaned_texts))})


print("API endpoints loaded")
