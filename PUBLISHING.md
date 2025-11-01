# Publishing ModenUI to npm

This guide will walk you through the process of publishing ModenUI to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **Login to npm**: Run `npm login` in your terminal
3. **Verify package name**: Check that `modenui` is available (or choose a different name)

## Step 1: Update Package Information

Before publishing, update the following in `package.json`:

1. **Author**: Replace `"Your Name"` with your actual name and email
2. **Repository**: Update the repository URL with your actual GitHub repo
3. **Package name**: Ensure the name `modenui` is available (npm names must be unique)

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/modenui.git"
  }
}
```

## Step 2: Build the Library

Build the library for distribution:

```bash
npm run build:lib
```

This will:
- Generate TypeScript declarations
- Bundle the library with Vite
- Extract all CSS into `dist/styles.css`
- Create both ESM and CommonJS formats

## Step 3: Test the Build Locally

Before publishing, test the build locally:

```bash
# Create a test project
mkdir test-modenui
cd test-modenui
npm init -y

# Install your local package
npm install ../MyStoryBook

# Test importing
```

Create a test file to verify imports work:

```tsx
import { Button, ThemeProvider } from 'modenui';
import 'modenui/styles';
```

## Step 4: Check Package Contents

Verify what will be published:

```bash
npm pack --dry-run
```

This shows what files will be included in the package.

## Step 5: Publish to npm

### First Time Publishing

```bash
npm publish
```

### Updating an Existing Package

1. Update the version in `package.json`:
   - Patch: `npm version patch` (1.0.0 → 1.0.1)
   - Minor: `npm version minor` (1.0.0 → 1.1.0)
   - Major: `npm version major` (1.0.0 → 2.0.0)

2. Build and publish:
   ```bash
   npm run build:lib
   npm publish
   ```

## Step 6: Verify Publication

Check your package on npm:
- Visit: `https://www.npmjs.com/package/modenui`

## Post-Publishing

1. **Create GitHub Release**: Tag the release in your GitHub repository
2. **Update Documentation**: Update README with any new features
3. **Announce**: Share your package on social media, forums, etc.

## Common Issues

### Package name already taken
- Solution: Use a scoped package: `@yourusername/modenui`
- Update package.json name to: `"@yourusername/modenui"`
- Publish with: `npm publish --access public`

### Authentication errors
- Solution: Run `npm login` again

### Version errors
- Solution: Make sure you're incrementing the version correctly

## Using Scoped Packages (Recommended)

If you want to publish under your npm organization:

1. Update package.json:
   ```json
   {
     "name": "@yourusername/modenui"
   }
   ```

2. Publish with public access:
   ```bash
   npm publish --access public
   ```

Users install with:
```bash
npm install @yourusername/modenui
```

