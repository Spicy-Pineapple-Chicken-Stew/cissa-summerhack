from flask import Flask
from summarizer import TransformerSummarizer, Summarizer
from pymongo import MongoClient
from config import *
from allennlp_models.pretrained import load_predictor
import nltk
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GPT2_model = TransformerSummarizer(transformer_type="GPT2", transformer_model_key="gpt2-medium")
BERT_model = Summarizer()
openIE_model = load_predictor('structured-prediction-srl-bert')

db_client = MongoClient(f"mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@cluster0.09aek.mongodb.net/summerhack?retryWrites=true&w=majority")
db = db_client.summerhack

nltk.download('averaged_perceptron_tagger')

global_task_queue = []

from app.apis import api as api_blueprint
from app.auth.endpoints import auth as auth_blueprint
from app.error_handler import *
from app.apis.endpoints import *

app.register_blueprint(api_blueprint)
app.register_blueprint(auth_blueprint)
