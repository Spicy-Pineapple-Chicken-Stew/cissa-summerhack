import json

import werkzeug.exceptions
from flask import Response

from app import app


@app.errorhandler(Exception)
def handle_error(e):
    if isinstance(e, werkzeug.exceptions.HTTPException):
        return Response(json.dumps({"error_name": e.name, "error_description": e.description}),
                    status=e.code, mimetype='application/json')
    elif len(e.args) == 2:
        return Response(json.dumps({"error_name": e.args[0], "error_description": e.args[1]}),
                    status=400, mimetype='application/json')
    else:
        return Response(json.dumps({"error_name": "InteralServerError", "error_description": str(e)}),
                    status=500, mimetype='application/json')


print("Error handler loaded")
