import time
import threading
from random import choice
from string import ascii_letters, digits

from flask import jsonify

from app.apis import api


def test(task_id):
    for i in range(10):
        time.sleep(1)
        print(task_id)


@api.route("/test")
def testing():
    task_id = ''.join(choice(ascii_letters + digits) for _ in range(10)) + str(int(time.time()))
    task = threading.Thread(target=test, args=(task_id,))
    task.start()
    return jsonify({"task_id": task_id})