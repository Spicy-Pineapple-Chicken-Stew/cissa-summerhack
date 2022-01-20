from flask import request, jsonify, Blueprint
from random import choice
from string import ascii_letters, digits

from app import db

auth = Blueprint('auth', __name__, url_prefix='/auth')
users = db.users


@auth.route('/login', methods=['POST'])
def login():
    if not ('username' in request.form and 'password' in request.form):
        raise Exception("InvalidArgument", "username and password are required")

    user = users.find_one({'username': request.form['username']})

    if user is None:
        return jsonify({"status": "failure", "reason": "Cannot find user"})
    elif user["password"] != request.form['password']:
        return jsonify({"status": "failure", "reason": "Invalid password"})

    return jsonify({'status':  "success", "user_id": user["user_id"]})


@auth.route('/register', methods=['POST'])
def register():
    if not ('username' in request.form and 'password' in request.form):
        raise Exception("InvalidArgument", "username and password are required")

    user = users.find_one({'username': request.form['username']})
    if user is not None:
        return jsonify({"status": "failure", "reason": "User already exists"})

    user_id = ''.join(choice(ascii_letters + digits) for _ in range(10))

    users.insert_one({"username": request.form['username'],
                                "password": request.form['password'],
                                "user_id": user_id})

    return jsonify({'status':  "success", "user_id": user_id})


print("Auth Endpoints Loaded")