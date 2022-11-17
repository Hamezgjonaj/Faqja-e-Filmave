import json
from flask import Flask
from flask_cors import CORS
import requests
import json
import glob

# f = open('movies.json', 'r')
# data = json.load(f)
# f.close()

# app = Flask(__name__)
# CORS(app, resources={r"*": {"origins": "*"}})

# @app.route('/')
# def index():
#   return data
# app.run()

base_url = 'https://api.themoviedb.org/3'
url_ls = []


filename = "C:/Users/user/Desktop/link.txt"

with open(filename) as file:
    for url in file:
        url_ls.append(url)


url_ls = [item.rstrip() for item in url_ls]
# print(url_ls)


# i=1
# for url in url_ls:
#   r = requests.get(base_url+url)
#   data = r.json()
#   print(data)

#   with open(f'requests/data{i}.json', 'w') as f:
#       json.dump(data, f)
#       i+=1



files_ls = glob.glob('requests\*')
files_ls = [item.replace("\\", '/') for item in files_ls]

# print(files_ls)

response_ls = []
i = 1
for file in files_ls:
  f = open(f'requests\data{i}.json', 'r')
  data = json.load(f)
  response_ls.append(data)
  f.close()
  i+=1

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route('/trending/all/week?api_key=28080d33c64f2524c45196d7e9b80b83&language=en-US')
def index():
  return response_ls[1]

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

