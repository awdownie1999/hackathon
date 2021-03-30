from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
stats_helper = StatsHelper()

@app.route('/')
def homepage():
    users = json.dumps(stats_helper.select_all_users())
    problems = json.dumps(stats_helper.select_all_problems())
    JSONLIST = {
        "users": users,
        "problems": problems
    }

    return json.dumps(JSONLIST)

print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')