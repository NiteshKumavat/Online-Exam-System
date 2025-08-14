from flask import Flask

server = Flask(__name__)

@server.route("/")
def home() :
    return "Online Exam System"


if __name__ == '__main__' :
    server.run(debug=True, port=8000)