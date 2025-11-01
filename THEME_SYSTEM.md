# Dark & Light Theme System

## 🎨 Theme System Overview

All components now support **dark theme** and **light theme** modes. The theme system uses CSS custom properties (variables) and React Context to provide seamless theme switching across all components.

## 📦 Theme Provider

The `ThemeProvider` component manages the theme state and provides it to all child components.

### Usage

```tsx
import { ThemeProvider } from './stories/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Hook Usage

```tsx
import { useTheme } from './stories/theme/ThemeProvider';

function MyComponent() {
  const { mode, toggleTheme, setTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {mode}
    </button>
  );
}
```

## 🌓 Theme Variables

The theme system uses CSS custom properties that automatically change based on the `data-theme` attribute:

### Light Theme Variables
- `--bg-primary`: #ffffff
- `--bg-secondary`: #f9fafb
- `--text-primary`: #111827
- `--text-secondary`: #6b7280
- `--border-default`: #d1d5db

### Dark Theme Variables
- `--bg-primary`: #111827
- `--bg-secondary`: #1f2937
- `--text-primary`: #f9fafb
- `--text-secondary`: #d1d5db
- `--border-default`: #4b5563

## 🎯 Component Support

All components automatically support theme switching:

✅ **Button** - All variants adapt to theme
✅ **Input** - All variants support dark/light mode
✅ **Card** - Background and text colors adapt
✅ **Navbar** - Includes theme toggle button
✅ **Sidebar** - Full theme support with proper contrast
✅ **Select** - Dropdown styling adapts
✅ **Checkbox** - Colors adapt to theme
✅ **Radio** - Theme-aware styling
✅ **Switch** - Theme support
✅ **Slider** - Track colors adapt
✅ **Progress** - Colors adapt
✅ **Chip** - Background and text adapt
✅ **Badge** - Colors adapt
✅ **Avatar** - Background colors adapt
✅ **Tooltip** - Background adapts
✅ **Popover** - Background and borders adapt
✅ **Accordion** - Background and text adapt
✅ **Tabs** - All variants support theme
✅ **Table** - Background and borders adapt
✅ **Pagination** - Button colors adapt
✅ **Breadcrumb** - Text colors adapt

## 🔄 How It Works

1. **ThemeProvider** wraps your app and manages theme state
2. Theme is stored in `localStorage` for persistence
3. System preference is detected on first load
4. `data-theme` attribute is set on `document.documentElement`
5. CSS variables automatically update based on the theme
6. All components use `var(--variable-name)` instead of fixed colors

## 💡 Features

- ✅ Automatic system preference detection
- ✅ Persistent theme (localStorage)
- ✅ Smooth transitions between themes
- ✅ TypeScript support
- ✅ Accessible contrast ratios
- ✅ All MUI colors maintained in both themes

## 🎨 Customization

To customize theme colors, edit `src/stories/theme/_theme-mixins.scss`:

```scss
@mixin dark-theme {
  --bg-primary: #your-color;
  --text-primary: #your-color;
  // ... more variables
}
```

## 📱 Navbar & Sidebar Improvements

### Navbar
- ✅ Modern, clean design
- ✅ Responsive mobile menu
- ✅ Built-in theme toggle button
- ✅ Icon support for menu items
- ✅ Smooth animations
- ✅ Proper hover states

### Sidebar
- ✅ Collapsible with smooth animation
- ✅ Active state highlighting
- ✅ Badge support for notifications
- ✅ Disabled item support
- ✅ Footer section
- ✅ Tooltips on collapsed state
- ✅ Theme-aware styling

## 🚀 Usage in Storybook

All stories automatically have theme support via the global decorator in `.storybook/preview.ts`. You can toggle themes using the Navbar component or programmatically:

```tsx
const { toggleTheme } = useTheme();
toggleTheme(); // Switches between light and dark
```

## 📝 Example

```tsx
import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import { Button } from './components/Button';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Button label="Click me" variant="primary" />
    </ThemeProvider>
  );
}
```

The theme will automatically apply to all components!

