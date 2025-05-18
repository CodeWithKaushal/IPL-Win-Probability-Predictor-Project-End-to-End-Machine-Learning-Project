@echo off
echo Starting the IPL Win Probability Predictor Application...

REM Open the first command prompt for the API server
start cmd.exe /k "cd /d "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project" && echo Installing API dependencies... && pip install flask flask-cors pandas numpy && echo Starting the Flask API server... && python api.py"

REM Wait a moment for API to start
timeout /t 3

REM Open the second command prompt for the React app
start cmd.exe /k "cd /d "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\ipl-win-predictor" && echo Installing frontend dependencies... && npm install && echo Starting the React development server... && npm run dev"

echo Both servers are starting in separate windows.
echo API server will be available at http://localhost:5000
echo Frontend will be available at http://localhost:5173

exit
