from app import global_task_queue


class Task:
    def __init__(self, task_id: str):
        self.task_id = task_id
        self.title = None
        self.status = None
        self.content = None

        self.error = False
        self.error_message = None


def get_task(task_id):
    for task in global_task_queue:
        if task.task_id == task_id:
            return task

    raise Exception("TaskError", "Task not found")
