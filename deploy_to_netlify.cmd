@echo off
echo.
echo ===================================================
echo Deploying IPL Win Predictor to Netlify
echo ===================================================
echo.

REM Copy the model file to the Netlify functions directory
echo Copying ML model to Netlify functions directory...
copy "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\pipe.pkl" "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\ipl-win-predictor\netlify\functions\pipe.pkl"
if %errorlevel% neq 0 (
  echo Error copying model file!
  exit /b %errorlevel%
)
echo Model file copied successfully!
echo.

REM Navigate to the frontend project directory
cd "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\ipl-win-predictor"

REM Check if Node.js is installed
echo Checking if Node.js is installed...
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed! Please install it from https://nodejs.org/
  exit /b 1
)

REM Install dependencies
echo Installing npm dependencies...
call npm install
if %errorlevel% neq 0 (
  echo Error installing dependencies!
  exit /b %errorlevel%
)
echo Dependencies installed successfully!
echo.

REM Build the project
echo Building the project...
call npm run build
if %errorlevel% neq 0 (
  echo Error building the project!
  exit /b %errorlevel%
)
echo Project built successfully!
echo.

REM Check if Netlify CLI is installed
echo Checking if Netlify CLI is installed...
where netlify >nul 2>nul
if %errorlevel% neq 0 (
  echo Netlify CLI is not installed. Installing now...
  call npm install netlify-cli -g
  if %errorlevel% neq 0 (
    echo Error installing Netlify CLI!
    exit /b %errorlevel%
  )
)
echo Netlify CLI is ready!
echo.

REM Deploy to Netlify
echo You can now deploy to Netlify using one of these methods:
echo.
echo Option 1: Manual upload through the Netlify UI
echo   - Go to https://app.netlify.com
echo   - Upload the entire 'ipl-win-predictor' directory
echo.
echo Option 2: Deploy via Netlify CLI
echo   - Run: netlify deploy --prod
echo.
echo Option 3: Connect to a Git repository
echo   - Push your code to GitHub, GitLab, or Bitbucket
echo   - Connect Netlify to your repository
echo.
echo For detailed instructions, see NETLIFY_DEPLOYMENT_GUIDE.md
echo.
