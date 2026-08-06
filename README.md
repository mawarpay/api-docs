# MawarPay API Documentation

[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-blue.svg)](https://docusaurus.io/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.0-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Website](https://img.shields.io/badge/Website-Online-brightgreen.svg)](https://apidocs.mawarpay.com)

This is the official API documentation website for MawarPay, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Features

- 📚 Comprehensive API documentation
- 🌐 Multi-language support (English & Bahasa Indonesia)
- 💻 Interactive code examples with syntax highlighting
- 🔍 Search functionality
- 📱 Responsive design

## Prerequisites

- Node.js >= 22.0
- npm (preferred; lockfile committed)

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

or

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The site will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

or

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Docker Build & Run

Build the static site and serve it with Nginx inside Docker:

```bash
docker build -t mawarpay/api-docs .
docker run --rm -p 8080:80 mawarpay/api-docs
```

Then open `http://localhost:8080` to view the docs.

## Serve Production Build

To test the production build locally:

```bash
npm run serve
```

or

```bash
yarn serve
```

## Clear Cache

If you encounter build issues, clear the cache:

```bash
npm run clear
```

or

```bash
yarn clear
```

## Deployment

The site is deployed to `https://apidocs.mawarpay.com`

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment:

1. **Connect your repository to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`

2. **Automatic deployments:**
   - Every push to the main branch will trigger a new deployment
   - Preview deployments are created for pull requests

3. **Environment variables (if needed):**
   - Add any required environment variables in the Vercel dashboard
   - Under Project Settings → Environment Variables

4. **Build settings (auto-detected):**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
- Node.js Version: 22.x (or higher)

The `vercel.json` configuration includes:
- ✅ Optimized caching headers for static assets
- ✅ Proper routing for i18n (English & Indonesian)
- ✅ SPA routing support
- ✅ Performance optimizations

#### GitHub Actions → Vercel

Continuous deployment is configured via `.github/workflows/vercel-deploy.yml`. To enable it:

1. In your GitHub repo settings, add the secret:
   - `VERCEL_TOKEN` – Personal token from Vercel dashboard (Settings → Tokens).
2. Ensure the `main` branch is connected to Vercel (or adjust the workflow trigger).
3. Push to `main` (or run the workflow manually via **Run workflow**). The workflow installs dependencies, runs `vercel pull`, `vercel build --prod`, and publishes the prebuilt output with `vercel deploy --prebuilt --prod`.

### Google Cloud Run Deployment

1. **Authenticate & set project**
   ```bash
   gcloud auth login
   gcloud config set project <PROJECT_ID>
   ```
2. **Enable required APIs (one-time)**
   ```bash
   gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
   ```
3. **Create an Artifact Registry repo (one-time)**
   ```bash
   gcloud artifacts repositories create mawarpay-docs \
     --repository-format=docker \
     --location=<REGION> \
     --description="MawarPay API Docs images"
   ```
4. **Build & push the container with Cloud Build**
   ```bash
   gcloud builds submit \
     --tag <REGION>-docker.pkg.dev/<PROJECT_ID>/mawarpay-docs/api-docs:$(git rev-parse --short HEAD)
   ```
5. **Deploy to Cloud Run**
   ```bash
   gcloud run deploy mawarpay-api-docs \
     --image <REGION>-docker.pkg.dev/<PROJECT_ID>/mawarpay-docs/api-docs:$(git rev-parse --short HEAD) \
     --region=<REGION> \
     --platform=managed \
     --allow-unauthenticated \
     --port=80 \
     --min-instances=0 \
     --max-instances=3
   ```
6. **Verify**
   - Grab the service URL from the deploy output.
   - Visit the URL to confirm both locales are accessible.

> ℹ️ Cloud Run automatically terminates idle containers; adjust `--min-instances` if you need warm instances, and use Cloud CDN/Load Balancer if you want custom domains or caching.

### GitHub Pages Deployment

For GitHub Pages deployment:

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Project Structure

```
api-docs/
├── docs/                    # English documentation
├── i18n/id/                 # Indonesian translations
├── src/                     # Source files
│   ├── components/          # React components
│   ├── css/                 # Custom styles
│   └── pages/               # Custom pages
├── static/                  # Static assets
└── docusaurus.config.ts     # Docusaurus configuration
```

## Contributing

1. Make your changes to the documentation files
2. Test locally using `npm start`
3. Submit a pull request

## License

Copyright © 2025 MawarPay. All rights reserved.
