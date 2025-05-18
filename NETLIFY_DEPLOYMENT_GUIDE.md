# IPL Win Predictor Netlify Deployment Guide

## Prerequisites

- Git installed
- Node.js installed
- Netlify account

## Deployment Steps

### 1. Prepare the project (already done)

- Frontend React app is in the `ipl-win-predictor` directory
- Backend serverless function is in `ipl-win-predictor/netlify/functions/predict.py`
- `netlify.toml` has been configured for both frontend and serverless functions

### 2. Copy model file to the functions directory

Before deploying, run this command in the terminal:

```bash
copy "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\pipe.pkl" "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\ipl-win-predictor\netlify\functions\pipe.pkl"
```

### 3. Deploy to Netlify

#### Option 1: Deploy via Netlify UI

1. Build your project locally:

   ```bash
   cd "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project\ipl-win-predictor"
   npm install
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/) and log in

3. Click "Add new site" and select "Deploy manually"

4. Drag and drop the entire `ipl-win-predictor` directory to the Netlify UI

5. Your site will be deployed with a random subdomain. You can change this in the site settings.

#### Option 2: Deploy via Git (recommended)

1. Push your project to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Netlify](https://app.netlify.com/) and log in

3. Click "New site from Git"

4. Select your Git provider and repository

5. Configure build settings:

   - Base directory: `ipl-win-predictor`
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

#### Option 3: Deploy via Netlify CLI

1. Install Netlify CLI:

   ```bash
   npm install netlify-cli -g
   ```

2. Log in to Netlify:

   ```bash
   netlify login
   ```

3. Navigate to your project:

   ```bash
   cd "c:\Data\PROJECTS\IPL Win Probability Predictor Project  End to End Machine Learning Project"
   ```

4. Deploy the site:
   ```bash
   netlify deploy --prod
   ```

### 4. Verify your deployment

Once deployed, Netlify will provide you with a URL to access your site. Make sure everything works correctly:

1. Open the deployed application in your browser
2. Fill out the prediction form and submit
3. Check that the prediction results are displayed correctly

## Troubleshooting

- **Function timeout errors**: Netlify Functions have a default timeout of 10 seconds. If your model takes longer to load, you may need to optimize it or consider a different hosting solution for the backend.
- **Package size limitations**: Netlify Functions have a size limit of 50 MB (unzipped). If your model is larger, you may need to trim it or use an external model hosting service.
- **Missing model file**: Ensure the `pipe.pkl` file is correctly copied to the Netlify functions directory before deployment.
- **CORS issues**: If you see CORS errors, check the headers in your serverless function response.

## Additional Resources

- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Deploying Python to Netlify Functions](https://docs.netlify.com/functions/build-with-python/)
- [Netlify CLI Reference](https://cli.netlify.com/)
