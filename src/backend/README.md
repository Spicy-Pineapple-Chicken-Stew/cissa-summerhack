# Summerhack Backend

Built using Flask. 

### Running locally

1. Install all required dependencies
2. Add config.py in app directory with MONGO_USERNAME and MONGO_PASSWORD
3. Run `python run.py`

### Documentation

##### APIs

`GET /api/text_summary`

Gets a summary of the text provided.

Params (URL query):
- text: The text to summarize.

Response:
- summary: The summary of the text.

`GET /api/website_summary`

Gets a summary of the website provided.

Params (URL query):
- url: The url of the website to summarize.

Response:
- summary: The summary of the website.

`GET /api/youtube_summary`

Gets a summary of the youtube video provided.

Params (URL query):
- url: The url of the youtube video to summarize.

Response:
- summary: The summary of the youtube video.

##### Auth

`POST /auth/login`

Authenticates a user

Params (x-www-form-urlencoded):
- username: The username of the user.
- password: The password of the user.

Response:
- status: The status of the request (success or failure)
- user_id (on success): The id of the user (important for future user related requests)
- reason (on failure): A message describing the reason for failure

`POST /auth/register`

Registers a user

Params (x-www-form-urlencoded):
- username: The username of the user.
- password: The password of the user.

Response:
- status: The status of the request (success or failure)
- reason (on failure): A message describing the reason for failure