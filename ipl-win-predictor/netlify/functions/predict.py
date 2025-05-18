import json
import pickle
import os
import numpy as np
import pandas as pd
from io import BytesIO

def handler(event, context):
    """
    Netlify Function handler for prediction API
    """
    # Check if it's a POST request
    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        # Parse request body
        body = json.loads(event['body'])
        
        # Get model from environment (will need to be uploaded)
        model_path = os.path.join(os.path.dirname(__file__), 'pipe.pkl')
        
        # Load the model
        pipe = pickle.load(open(model_path, 'rb'))
        
        # Extract prediction parameters
        batting_team = body['batting_team']
        bowling_team = body['bowling_team']
        city = body['city']
        target = int(body['target'])
        score = int(body['score'])
        overs = float(body['overs'])
        wickets = int(body['wickets'])

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

        # Return prediction results
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'batting_team_prob': batting_team_prob,
                'bowling_team_prob': bowling_team_prob,
                'winner': batting_team if batting_team_prob > bowling_team_prob else bowling_team
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({'error': str(e)})
        }
