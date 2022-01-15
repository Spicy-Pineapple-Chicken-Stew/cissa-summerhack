from flask import request, jsonify, Blueprint

from app import GPT2_model

api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/text_summary')
def text_summary():
    text = request.args.get('text')
    if text is None or len(text) == 0:
        raise Exception("InvalidArgument", "text is required")

    return jsonify({"summary": ''.join(GPT2_model(text))})


print("API endpoints loaded")
