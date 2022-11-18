import json
from flask import Flask
from flask_cors import CORS
import requests
import json
import glob


app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/trending/all/week?api_key=28080d33c64f2524c45196d7e9b80b83&language=en-US')
def index():
  f = open('data1.json', 'r')
  data = json.load(f)
  f.close()
  return data

@app.route('/discover/tv?api_key=28080d33c64f2524c45196d7e9b80b83&with_networks=213')
def index1():
  return response_ls[2]

@app.route('/discover/movie?api_key=28080d33c64f2524c45196d7e9b80b83&with_genres=27')
def index2():
  return response_ls[3]

@app.route('/discover/movie?api_key=28080d33c64f2524c45196d7e9b80b83&with_genres=99')
def index3():
  return response_ls[4]

@app.route('/discover/tv?api_key=28080d33c64f2524c45196d7e9b80b83&with_networks=213')
def index4():
  return response_ls[5]

@app.route('/discover/movie?api_key=28080d33c64f2524c45196d7e9b80b83&with_genres=878')
def index5():
  return response_ls[6]

@app.route('/movie/top_rated?api_key=28080d33c64f2524c45196d7e9b80b83&language=en-US')
def index6():
  return response_ls[7]

@app.route('/trending/all/week?api_key=28080d33c64f2524c45196d7e9b80b83&language=en-US')
def index7():
  return response_ls[8]

@app.route('/data')
def index8():
  return response_ls[0]


app.run()

