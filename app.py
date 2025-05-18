import streamlit as st
import pickle
import pandas as pd
import base64
from PIL import Image
import requests
from io import BytesIO

# Load the model
try:
    pipe = pickle.load(open('pipe.pkl', 'rb'))
except FileNotFoundError:
    st.error(
        "Model file 'pipe.pkl' not found. Please check the file path and try again.")

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

# Team logo URLs - add these for visual enhancement
team_logos = {
    'Chennai Super Kings': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.svg.png',
    'Royal Challengers Bangalore': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/200px-Royal_Challengers_Bangalore_2020.svg.png',
    'Mumbai Indians': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.svg.png',
    'Kolkata Knight Riders': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/200px-Kolkata_Knight_Riders_Logo.svg.png',
    'Rajasthan Royals': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/200px-Rajasthan_Royals_Logo.svg.png',
    'Delhi Daredevils': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png',
    'Delhi Capitals': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/200px-Delhi_Capitals_Logo.svg.png',
    'Kings XI Punjab': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png',
    'Punjab Kings': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/200px-Punjab_Kings_Logo.svg.png',
    'Sunrisers Hyderabad': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/200px-Sunrisers_Hyderabad.svg.png',
    'Gujarat Titans': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/200px-Gujarat_Titans_Logo.svg.png',
    'Lucknow Super Giants': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Lucknow_Super_Giants_Logo.png/200px-Lucknow_Super_Giants_Logo.png'
}

# Function to set background image


def add_bg_from_url(image_url):
    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content))

    # Convert to base64
    buffered = BytesIO()
    img = img.resize((1600, 900), Image.LANCZOS)
    img.save(buffered, format="JPEG", quality=50)
    img_str = base64.b64encode(buffered.getvalue()).decode()

    # Set background image with CSS
    page_bg_img = f"""
    <style>
    .stApp {{
        background-image: url("data:image/jpeg;base64,{img_str}");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }}
    .stApp:before {{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: -1;
    }}
    </style>
    """
    st.markdown(page_bg_img, unsafe_allow_html=True)


# Apply enhanced CSS for better styling
st.markdown("""
    <style>
        /* General layout and styling */
        .main {
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        /* Card styling */
        .card {
            background-color: rgba(255, 255, 255, 0.85);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        
        /* Title styling */
        .title {
            font-size: 42px;
            color: #FF6600;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 1px 1px 2px #000;
        }

        /* Subheader styling */
        .subheader {
            font-size: 28px;
            color: #0072BC;
            text-align: center;
            margin-bottom: 20px;
        }
        
        /* Team logo styling */
        .team-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            margin: 10px;
        }
        
        /* Team name styling */
        .team-name {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
        }

        /* Sidebar styling */
        .sidebar .sidebar-content {
            background-color: rgba(249, 249, 249, 0.85) !important;
            border-radius: 15px;
            padding: 20px;
        }

        /* Button styling */
        .stButton>button {
            background-color: #0072BC;
            color: white;
            border: none;
            padding: 12px 30px;
            text-align: center;
            display: inline-block;
            font-size: 18px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            width: 100%;
        }
        
        .stButton>button:hover {
            background-color: #FF6600;
            transform: scale(1.02);
        }

        /* Result styling */
        .result {
            text-align: center;
            font-size: 26px;
            margin-top: 20px;
            color: #333;
            font-weight: bold;
        }
        
        /* Progress bar styling */
        .stProgress > div > div {
            height: 25px !important;
            border-radius: 8px;
        }
        
        /* Match situation summary box */
        .match-summary {
            background-color: rgba(0, 114, 188, 0.1);
            border-left: 5px solid #0072BC;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        
        /* Team VS display */
        .vs-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        }
        
        .vs-text {
            font-size: 32px;
            font-weight: bold;
            margin: 0 20px;
            color: #FF6600;
        }

        /* Developer footer styling */
        .footer {
            margin-top: 30px;
            background-color: #0072BC;
            color: white;
            text-align: center;
            padding: 15px 0;
            border-radius: 8px;
            font-weight: bold;
        }
    </style>
    """, unsafe_allow_html=True)

# Set background image
add_bg_from_url(
    "https://img.freepik.com/free-photo/cricket-stadium-3d-rendering_3544-358.jpg")

# Set the title and header
st.markdown('<div class="title">IPL Win Probability Predictor</div>',
            unsafe_allow_html=True)
st.markdown('<div class="subheader">Predict your team\'s chances in real-time</div>',
            unsafe_allow_html=True)

# Create main layout with columns
col1, col2 = st.columns([1, 3])

# Sidebar for input features
with col1:
    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.subheader("Match Parameters")

    batting_team = st.selectbox('Batting Team', sorted(teams))
    bowling_team = st.selectbox('Bowling Team', sorted(teams))

    # Display team logos
    if batting_team in team_logos and bowling_team in team_logos:
        vs_col1, vs_col2, vs_col3 = st.columns([2, 1, 2])
        with vs_col1:
            st.image(team_logos[batting_team], width=100)
            st.markdown(
                f'<div class="team-name">{batting_team}</div>', unsafe_allow_html=True)
        with vs_col2:
            st.markdown('<div class="vs-text">VS</div>',
                        unsafe_allow_html=True)
        with vs_col3:
            st.image(team_logos[bowling_team], width=100)
            st.markdown(
                f'<div class="team-name">{bowling_team}</div>', unsafe_allow_html=True)

    selected_city = st.selectbox('Host City', sorted(cities))

    st.subheader("Match Situation")
    target = st.number_input('Target', min_value=1, value=180)
    score = st.number_input('Current Score', min_value=0, value=80)
    overs = st.number_input('Overs Completed', min_value=0.0,
                            max_value=19.5, value=10.0, step=0.1, format="%.1f")
    wickets = st.number_input(
        'Wickets Lost', min_value=0, max_value=9, value=3)

    st.markdown('</div>', unsafe_allow_html=True)

# Main content area
with col2:
    # Match summary card
    st.markdown('<div class="card">', unsafe_allow_html=True)

    # Calculate match situation
    runs_left = target - score
    balls_left = 120 - (int(overs) * 6 + int((overs % 1) * 10))
    wickets_left = 10 - wickets

    # Display match situation summary
    st.markdown('<div class="match-summary">', unsafe_allow_html=True)
    st.subheader("Match Situation")

    situation_col1, situation_col2 = st.columns(2)

    with situation_col1:
        st.metric("Target", f"{target} runs")
        st.metric("Required Run Rate",
                  f"{(runs_left * 6 / balls_left):.2f}" if balls_left > 0 else "N/A")

    with situation_col2:
        st.metric("Runs Needed", f"{runs_left} runs")
        st.metric("Balls Remaining", f"{balls_left} balls")

    st.progress(int((score/target * 100) if target > 0 else 0))
    st.caption(
        f"Progress: {score}/{target} runs ({(score/target * 100):.1f}%)" if target > 0 else "")

    st.markdown('</div>', unsafe_allow_html=True)

    # Prediction section
    if st.button('Predict Win Probability', key='predict_button'):
        with st.spinner('Calculating win probabilities...'):
            # Calculating required variables
            crr = score / overs if overs > 0 else 0
            rrr = (runs_left * 6) / \
                balls_left if balls_left > 0 else float('inf')

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

                # Displaying the results with styled progress bars
                st.subheader("Win Probability")

                # Create two columns for the team probabilities
                prob_col1, prob_col2 = st.columns(2)

                with prob_col1:
                    st.markdown(
                        f'<div class="team-name">{batting_team}</div>', unsafe_allow_html=True)
                    st.progress(float(win_prob))
                    st.markdown(
                        f'<div style="text-align: center; font-weight: bold; color: {"green" if win_prob > loss_prob else "black"};">{round(win_prob * 100, 1)}%</div>', unsafe_allow_html=True)

                with prob_col2:
                    st.markdown(
                        f'<div class="team-name">{bowling_team}</div>', unsafe_allow_html=True)
                    st.progress(float(loss_prob))
                    st.markdown(
                        f'<div style="text-align: center; font-weight: bold; color: {"green" if loss_prob > win_prob else "black"};">{round(loss_prob * 100, 1)}%</div>', unsafe_allow_html=True)

                # Match outcome prediction
                st.markdown('<div class="result">', unsafe_allow_html=True)
                if win_prob > loss_prob:
                    st.success(f"Prediction: {batting_team} is likely to win!")
                else:
                    st.error(f"Prediction: {bowling_team} is likely to win!")
                st.markdown('</div>', unsafe_allow_html=True)

            except Exception as e:
                st.error(f"An error occurred during prediction: {e}")

    st.markdown('</div>', unsafe_allow_html=True)

# Developer footer
st.markdown('<div class="footer">Developed by Kaushal Divekar | IPL Win Probability Predictor</div>',
            unsafe_allow_html=True)
