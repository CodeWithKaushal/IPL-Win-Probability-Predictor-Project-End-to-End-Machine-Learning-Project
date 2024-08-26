import streamlit as st
import pickle
import pandas as pd

# Load the model
try:
    pipe = pickle.load(open('pipe.pkl', 'rb'))
except FileNotFoundError:
    st.error("Model file 'pipe.pkl' not found. Please check the file path and try again.")

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

# Apply basic CSS for better styling
st.markdown("""
    <style>
        /* General layout and styling */
        .main {
            background-color: #f0f2f6;
            padding: 10px;
        }

        /* Title styling */
        .title {
            font-size: 36px;
            color: #000;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
        }

        /* Subheader styling */
        .subheader {
            font-size: 24px;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }

        /* Sidebar styling */
        .sidebar .sidebar-content {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
        }

        /* Button styling */
        .stButton>button {
            background-color: #ff4b4b;
            color: white;
            border: none;
            padding: 10px 24px;
            text-align: center;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 8px;
        }

        /* Result styling */
        .result {
            text-align: center;
            font-size: 24px;
            margin-top: 20px;
            color: #444;
            font-weight: bold;
        }

        /* Developer footer styling */
        .footer {
            margin-top: 30px;
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
            border-radius: 8px;
        }
    </style>
    """, unsafe_allow_html=True)

# Set the title and header
st.markdown('<div class="title">IPL Win Predictor</div>', unsafe_allow_html=True)
st.markdown('<div class="subheader">Predict the probability of winning a match</div>', unsafe_allow_html=True)

# Sidebar for input features
st.sidebar.header("Input Features")
with st.sidebar:
    st.subheader("Teams")
    batting_team = st.selectbox('Select the batting team', sorted(teams))
    bowling_team = st.selectbox('Select the bowling team', sorted(teams))
    selected_city = st.selectbox('Select host city', sorted(cities))

    st.subheader("Match Details")
    target = st.number_input('Target', min_value=0)
    score = st.number_input('Score', min_value=0)
    overs = st.number_input('Overs completed', min_value=0.0, max_value=20.0, step=0.1)
    wickets = st.number_input('Wickets out', min_value=0, max_value=10, step=1)

# Predict button
if st.button('Predict Probability'):
    # Calculating required variables
    runs_left = target - score
    balls_left = 120 - (overs * 6)
    wickets_left = 10 - wickets
    crr = score / overs if overs > 0 else 0
    rrr = (runs_left * 6) / balls_left if balls_left > 0 else 0

    # Creating a DataFrame for model input
    input_df = pd.DataFrame({
        'batting_team': [batting_team], 
        'bowling_team': [bowling_team], 
        'city': [selected_city],
        'runs_left': [runs_left], 
        'balls_left': [balls_left], 
        'wickets': [wickets_left],
        'total_runs_x': [target], 
        'crr': [crr], 
        'rrr': [rrr]
    })

    # Predicting the probability
    try:
        result = pipe.predict_proba(input_df)
        loss_prob = result[0][0]
        win_prob = result[0][1]

        # Displaying the results with styling
        st.markdown(f'<div class="result">{batting_team}: <b>{round(win_prob * 100, 2)}%</b></div>', unsafe_allow_html=True)
        st.markdown(f'<div class="result">{bowling_team}: <b>{round(loss_prob * 100, 2)}%</b></div>', unsafe_allow_html=True)
    except Exception as e:
        st.error(f"An error occurred during prediction: {e}")

# Developer footer
st.markdown('<div class="footer">Developed by Kaushal Divekar</div>', unsafe_allow_html=True)
