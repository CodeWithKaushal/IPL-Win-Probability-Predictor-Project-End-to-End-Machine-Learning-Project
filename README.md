# IPL Win Probability Predictor

A machine learning-powered web application that predicts the win probability of IPL matches in real-time.

## Features

- Real-time win probability prediction based on current match situation
- User-friendly interface with team logos and intuitive controls
- Detailed match statistics and visualization of win probabilities
- Works in both online mode (with Flask API) and offline mode (fallback logic)

## Project Structure

- `/` - Root directory containing the Python backend and ML model
  - `api.py` - Flask API server that serves predictions using the ML model
  - `app.py` - Streamlit web app (alternative UI)
  - `pipe.pkl` - Trained machine learning model
- `/ipl-win-predictor` - React frontend application
  - `/src` - Source code for the React application
    - `/components` - React components
    - `/services` - API and service functions
    - `/models` - Data models and interfaces

## Installation & Setup

### Prerequisites

- Python 3.8+ with pip
- Node.js 16+ with npm

### Quick Start (Automated)

1. Run the `start-app.cmd` script to start both the Flask API and React frontend:

```
start-app.cmd
```

This will:

- Start the Flask API server on http://localhost:5000
- Start the React development server on http://localhost:5173

### Manual Setup

#### Backend (Python Flask API)

1. Install Python dependencies:

```
pip install flask flask-cors pandas numpy scikit-learn
```

2. Start the Flask API server:

```
python api.py
```

#### Frontend (React)

1. Navigate to the React app directory:

```
cd ipl-win-predictor
```

2. Install Node.js dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

4. Open http://localhost:5173 in your browser

## Usage

1. Select batting and bowling teams
2. Enter match details (target, current score, overs, wickets)
3. Click "Predict Win Probability" to see results
4. View detailed match statistics and win probability visualization

## Technical Details

- Backend: Python, Flask, scikit-learn
- Frontend: React, TypeScript, Tailwind CSS
- Machine Learning: Classification model trained on historical IPL data

## Credits

Developed by Kaushal Divekar
