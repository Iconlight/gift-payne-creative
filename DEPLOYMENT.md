# Gift Payne Creative - Deployment Guide

## Vercel Deployment

This project is ready to deploy on Vercel. Follow these steps:

### Quick Deploy

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

### Manual Configuration (if needed)

If Vercel doesn't auto-detect settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

No environment variables are required for this project.

### Build Verification

The project has been tested and builds successfully. The build output is in the `dist` directory.

### Post-Deployment

After deployment, your site will be available at:
- `https://your-project-name.vercel.app`

You can also add a custom domain in the Vercel dashboard.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
