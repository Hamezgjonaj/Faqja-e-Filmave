import json
from flask import Flask
from flask_cors import CORS

f = open('movies.json', 'r')
data = json.load(f)
f.close()

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})

@app.route('/')
def index():
  return data
app.run()
