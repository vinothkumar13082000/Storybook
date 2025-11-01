# Deploying Storybook for LinkedIn

This guide will help you deploy your Storybook to GitHub Pages so you can share it on LinkedIn.

## Option 1: GitHub Pages (Recommended - Free)

### Step 1: Enable GitHub Pages in Your Repository

1. Go to your GitHub repository: https://github.com/vinothkumar13082000/Storybook
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Push the GitHub Actions Workflow

The workflow file (`.github/workflows/deploy-storybook.yml`) is already created. Just commit and push:

```bash
git add .github/workflows/deploy-storybook.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the workflow running
3. Wait for it to complete (about 2-3 minutes)
4. Once complete, your Storybook will be available at:
   
   **https://vinothkumar13082000.github.io/Storybook/**

### Step 4: Share on LinkedIn

You can now share this URL in your LinkedIn post:

```
🚀 Excited to share ModenUI - A modern React component library!

✨ Features:
• 40+ Beautiful Components
• Dark/Light Theme Support
• Animated Variants
• TypeScript Support
• Fully Customizable

🔗 View Live Demo: https://vinothkumar13082000.github.io/Storybook/
📦 Install: npm install modenui
📚 GitHub: https://github.com/vinothkumar13082000/Storybook

#React #TypeScript #UIComponents #WebDevelopment
```

---

## Option 2: Netlify (Alternative - Also Free)

### Quick Deploy

1. Go to https://www.netlify.com/
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - **Build command:** `npm run build-storybook`
   - **Publish directory:** `storybook-static`
6. Click "Deploy site"
7. Your site will be available at: `https://your-site-name.netlify.app`

---

## Option 3: Vercel (Alternative - Also Free)

1. Go to https://vercel.com/
2. Sign up/login with GitHub
3. Import your repository
4. Build settings:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build-storybook`
   - **Output Directory:** `storybook-static`
5. Click "Deploy"
6. Your site will be available at: `https://your-site-name.vercel.app`

---

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build Storybook
npm run build-storybook

# The built files are in storybook-static/
# Upload the contents of this folder to any static hosting service
```

---

## Troubleshooting

### GitHub Pages showing 404
- Make sure GitHub Actions workflow completed successfully
- Check that Pages source is set to "GitHub Actions" in Settings
- Wait a few minutes for DNS propagation

### Storybook not loading correctly
- Ensure the base path is correctly set (should be `/Storybook/` for GitHub Pages)
- Check browser console for errors
- Verify all assets are loading correctly

---

## Updating Your Storybook

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and deploy your Storybook!

