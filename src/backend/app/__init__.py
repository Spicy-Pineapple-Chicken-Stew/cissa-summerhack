from flask import Flask
from summarizer import TransformerSummarizer
from pymongo import MongoClient
from config import *

app = Flask(__name__)
GPT2_model = TransformerSummarizer(transformer_type="GPT2", transformer_model_key="gpt2-medium")
db_client = MongoClient(f"mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@cluster0.09aek.mongodb.net/summerhack?retryWrites=true&w=majority")
db = db_client.summerhack

from app.apis.endpoints import api as api_blueprint
from app.auth.endpoints import auth as auth_blueprint
from app.error_handler import *

app.register_blueprint(api_blueprint)
app.register_blueprint(auth_blueprint)
