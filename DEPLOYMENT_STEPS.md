# 🚀 Deploy Storybook - Step by Step Guide

## Step 1: Commit and Push Changes

Run these commands:

```bash
git add .gitignore .storybook/main.ts package.json .github/ DEPLOY.md QUICK_START.md
git commit -m "Add Storybook deployment configuration"
git push origin main
```

## Step 2: Enable GitHub Pages

1. Open your browser and go to:
   **https://github.com/vinothkumar13082000/Storybook/settings/pages**

2. Under **"Source"** section:
   - Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **"Save"**

## Step 3: Check Deployment Status

1. Go to the **Actions** tab:
   **https://github.com/vinothkumar13082000/Storybook/actions**

2. You'll see a workflow called **"Deploy Storybook to GitHub Pages"**
   - Click on it to see the progress
   - Wait for it to complete (takes 2-3 minutes)
   - When you see a green ✅ checkmark, deployment is complete!

## Step 4: Your Storybook URL

Once deployment is complete, your Storybook will be live at:

**https://vinothkumar13082000.github.io/Storybook/**

## 📍 Where to Check Latest Build

### Option 1: GitHub Actions (Best)
- URL: https://github.com/vinothkumar13082000/Storybook/actions
- Shows: Build logs, deployment status, any errors
- Updates: Every time you push to `main` branch

### Option 2: GitHub Pages Settings
- URL: https://github.com/vinothkumar13082000/Storybook/settings/pages
- Shows: Deployment history, last deployment time
- Info: Current deployment URL

### Option 3: Your Storybook Site
- URL: https://vinothkumar13082000.github.io/Storybook/
- Shows: Live Storybook (if deployment succeeded)

## 🔄 Auto-Deployment

After initial setup, every time you:
1. Push changes to `main` branch
2. GitHub Actions automatically rebuilds and redeploys
3. Your Storybook updates in 2-3 minutes

No manual steps needed!

## ⚠️ Troubleshooting

**If deployment fails:**
1. Go to Actions tab → Click on failed workflow
2. Check the error message
3. Common issues:
   - Pages not enabled (go to Settings → Pages → Enable)
   - Build errors (check logs)

**If URL shows 404:**
1. Wait 5-10 minutes after deployment
2. Clear browser cache
3. Try in incognito/private mode
4. Make sure URL ends with `/Storybook/` (with trailing slash)

**If workflow doesn't run:**
1. Check that `.github/workflows/deploy-storybook.yml` exists
2. Make sure you pushed to `main` branch
3. Check repository settings → Actions → Workflow permissions

