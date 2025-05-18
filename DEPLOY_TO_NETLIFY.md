# Deploying to Netlify

This guide will walk you through the steps to deploy the IPL Win Predictor application to Netlify.

## Prerequisites

- [Git](https://git-scm.com/) installed
- [Node.js](https://nodejs.org/) installed
- [Netlify account](https://app.netlify.com/signup) (free tier works fine)
- A deployed backend API (see Backend Deployment section below)

## Frontend Deployment Steps

1. **Prepare your application for production**

   Update the API URL in `.env.production`:

   ```
   VITE_API_URL=https://your-backend-api-url.com
   ```

   Replace `https://your-backend-api-url.com` with the actual URL where your Flask API is hosted.

2. **Deploy to Netlify**

   You can deploy to Netlify in two ways:

   ### Option 1: Deploy via Netlify UI (easiest)

   1. Build your project locally:

      ```
      cd ipl-win-predictor
      npm install
      npm run build
      ```

   2. Go to [Netlify](https://app.netlify.com/) and log in

   3. Drag and drop the `ipl-win-predictor/dist` folder to the Netlify UI

   4. Your site will be deployed with a random subdomain. You can change this in the site settings.

   ### Option 2: Deploy via Git (recommended)

   1. Push your project to a Git repository (GitHub, GitLab, or Bitbucket)

   2. Go to [Netlify](https://app.netlify.com/) and log in

   3. Click "New site from Git"

   4. Select your Git provider and repository

   5. Configure build settings:

      - Base directory: `ipl-win-predictor`
      - Build command: `npm run build`
      - Publish directory: `dist`

   6. Add environment variables in the Netlify UI:

      - Key: `VITE_API_URL`
      - Value: Your API URL (e.g., `https://your-backend-api-url.com`)

   7. Click "Deploy site"

3. **Verify your deployment**

   Once deployed, Netlify will provide you with a URL to access your site. Make sure everything works correctly.

## Backend Deployment Options

Since Netlify only hosts static content, you need to deploy your Flask API separately. Here are some options:

### Option 1: Deploy to Render.com

1. Create an account on [Render](https://render.com/) (free tier available)
2. Create a new Web Service
3. Connect your Git repository
4. Configure the service:
   - Runtime: Python
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python api.py`
5. Add environment variables if needed
6. Deploy the service

### Option 2: Deploy to Heroku

1. Create an account on [Heroku](https://signup.heroku.com/) (credit card required for free tier)
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. Create a new app: `heroku create ipl-win-predictor-api`
4. Add a `Procfile` (already exists in your project)
5. Deploy: `git push heroku main`

### Option 3: Deploy to PythonAnywhere

1. Create an account on [PythonAnywhere](https://www.pythonanywhere.com/) (free tier available)
2. Upload your files
3. Set up a web app using Flask
4. Configure WSGI file to point to your Flask app

## Troubleshooting

- **CORS issues**: Make sure your backend API has CORS configured correctly to allow requests from your Netlify domain
- **API connection errors**: Verify that the `VITE_API_URL` is set correctly and the API is accessible
- **Build errors**: Check Netlify build logs for any issues

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Render Documentation](https://render.com/docs)
- [Heroku Documentation](https://devcenter.heroku.com/)
- [PythonAnywhere Documentation](https://help.pythonanywhere.com/)
