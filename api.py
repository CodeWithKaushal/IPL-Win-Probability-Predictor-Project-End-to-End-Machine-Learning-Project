import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
try:
    pipe = pickle.load(open('pipe.pkl', 'rb'))
    print("Model loaded successfully!")
except FileNotFoundError:
    print("Error: Model file 'pipe.pkl' not found!")
    pipe = None

# Define teams and cities lists
teams = [
    'Royal Challengers Bangalore', 'Kings XI Punjab', 'Delhi Daredevils', 'Mumbai Indians',
    'Kolkata Knight Riders', 'Rajasthan Royals', 'Chennai Super Kings', 'Sunrisers Hyderabad',
    'Delhi Capitals', 'Punjab Kings', 'Lucknow Super Giants', 'Gujarat Titans'
]

cities = [
    'Bangalore', 'Chandigarh', 'Delhi', 'Mumbai', 'Kolkata', 'Jaipur', 'Hyderabad', 'Chennai',
    'Cape Town', 'Port Elizabeth', 'Durban', 'Centurion', 'East London', 'Johannesburg',
    'Kimberley', 'Bloemfontein', 'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala',
    'Visakhapatnam', 'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi', 'nan', 'Bengaluru', 'Indore',
    'Dubai', 'Sharjah', 'Navi Mumbai', 'Lucknow', 'Guwahati', 'Mohali'
]


@app.route('/predict', methods=['POST'])
def predict():
    """
    API endpoint for predicting the IPL match outcome.

    Expects JSON with:
    {
        "batting_team": string,
        "bowling_team": string,
        "city": string,
        "target": integer,
        "score": integer,
        "overs": float,
        "wickets": integer
    }
    """
    if pipe is None:
        return jsonify({"error": "Model not loaded"}), 500

    try:
        data = request.get_json()

        batting_team = data['batting_team']
        bowling_team = data['bowling_team']
        city = data['city']
        target = int(data['target'])
        score = int(data['score'])
        overs = float(data['overs'])
        wickets = int(data['wickets'])

        # Calculate required metrics
        runs_left = target - score
        balls_left = 120 - (overs * 6)
        wickets_left = 10 - wickets
        crr = score / overs if overs > 0 else 0
        rrr = (runs_left * 6) / balls_left if balls_left > 0 else float('inf')

        # Create input dataframe for prediction
        input_df = pd.DataFrame({
            'batting_team': [batting_team],
            'bowling_team': [bowling_team],
            'city': [city],
            'runs_left': [runs_left],
            'balls_left': [balls_left],
            'wickets_left': [wickets_left],
            'total_runs_x': [target],
            'crr': [crr],
            'rrr': [rrr]
        })

        # Make prediction
        result = pipe.predict_proba(input_df)

        batting_team_prob = float(result[0][1])
        bowling_team_prob = float(result[0][0])

        return jsonify({
            'batting_team_prob': batting_team_prob,
            'bowling_team_prob': bowling_team_prob,
            'winner': batting_team if batting_team_prob > bowling_team_prob else bowling_team
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Default route to check if API is running


@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "API is running",
        "teams": teams,
        "cities": cities
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)
