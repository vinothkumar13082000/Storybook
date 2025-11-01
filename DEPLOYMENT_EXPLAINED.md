# Deployment Process Explained

## Two Different Deployments

### 1. 📖 Storybook (GitHub Pages) - AUTO DEPLOYMENT ✅

**What happens when you merge to main:**

- ✅ **Automatically deploys** to GitHub Pages
- ✅ GitHub Actions workflow runs automatically
- ✅ Your Storybook URL updates in 2-3 minutes
- ✅ **No manual steps needed!**

**URL:** https://vinothkumar13082000.github.io/Storybook/

**How it works:**

1. You push/merge code to `main` branch
2. GitHub Actions detects the push
3. Workflow automatically:
   - Builds Storybook (`npm run build-storybook`)
   - Deploys to GitHub Pages
4. Your Storybook is live!

**Check deployment:**

- Go to: https://github.com/vinothkumar13082000/Storybook/actions
- You'll see the workflow running
- Green ✅ = Success

---

### 2. 📦 NPM Package - MANUAL DEPLOYMENT ⚠️

**What happens when you merge to main:**

- ❌ **Does NOT automatically publish** to npm
- ⚠️ You need to manually publish

**Steps to publish to npm:**

#### First Time Setup:

1. **Login to npm:**

   ```bash
   npm login
   ```

2. **Check package name availability:**

   ```bash
   npm view modenui
   ```

   If it says "404", the name is available.

3. **Build the library:**

   ```bash
   npm run build:lib
   ```

4. **Publish:**
   ```bash
   npm publish
   ```

#### Updating the Package:

1. **Update version in package.json:**

   ```bash
   npm version patch    # 1.0.0 → 1.0.1 (bug fixes)
   npm version minor    # 1.0.0 → 1.1.0 (new features)
   npm version major    # 1.0.0 → 2.0.0 (breaking changes)
   ```

2. **Build and publish:**
   ```bash
   npm run build:lib
   npm publish
   ```

---

## Summary

| Action              | Storybook (GitHub Pages) | NPM Package               |
| ------------------- | ------------------------ | ------------------------- |
| Merge to main       | ✅ Auto-deploys          | ❌ No action              |
| Publish new version | ✅ Auto-updates          | ⚠️ Manual `npm publish`   |
| Check status        | Actions tab              | npmjs.com/package/modenui |

---

## Best Practice Workflow

1. **Make changes** in your code
2. **Commit and push** to main:
   ```bash
   git add .
   git commit -m "Add new features"
   git push origin main
   ```
3. **Storybook auto-updates** (wait 2-3 minutes)
4. **Test in Storybook:** https://vinothkumar13082000.github.io/Storybook/
5. **When ready for npm:**
   - Update version: `npm version patch`
   - Build: `npm run build:lib`
   - Publish: `npm publish`

---

## Quick Commands

**For Storybook (automatic):**

- Just push to main → Done!

**For NPM (manual):**

```bash
npm version patch
npm run build:lib
npm publish
```
