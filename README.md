# ModenUI

A modern, beautiful React UI component library with dark/light theme support and animated variants. Built with TypeScript and SCSS.

## Features

- 🎨 **40+ Beautiful Components** - Comprehensive set of UI components
- 🌓 **Dark/Light Theme** - Built-in theme system with automatic system preference detection
- ✨ **Animated Variants** - Smooth animations for all components
- 📱 **Responsive** - Mobile-first design
- 🎯 **TypeScript** - Full TypeScript support
- 🎨 **Customizable** - Full control over styling via props
- 🔧 **Tree-shakeable** - Import only what you need

## Installation

```bash
npm install modenui
# or
yarn add modenui
# or
pnpm add modenui
```

## Quick Start

```tsx
import React from 'react';
import { ThemeProvider, Button, Card } from 'modenui';
import 'modenui/styles';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Button variant="primary">Click me</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Components

- **Form Controls**: Button, Input, Textarea, Select, Checkbox, Radio, Switch, Slider
- **Data Display**: Table, List, Card, Badge, Avatar, Typography, Image, Empty
- **Feedback**: Alert, Message, Progress, Spinner, Skeleton, Tooltip, Popover, Dialog, Backdrop
- **Navigation**: Navbar, Sidebar, Breadcrumb, Pagination, Tabs, Accordion
- **Layout**: Space, Divider
- **Other**: Stepper, Timeline, Rating, Chip, Link

## Theme Support

All components support both light and dark themes. The `ThemeProvider` automatically detects system preferences.

```tsx
import { ThemeProvider, useTheme } from 'modenui';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {mode}
    </button>
  );
}
```

## Animated Variants

All components support an `animated` prop for smooth entrance animations:

```tsx
<Button animated>Animated Button</Button>
<Card animated>Animated Card</Card>
```

## Documentation

Full documentation and examples are available in our [Storybook](https://your-storybook-url.com).

## Requirements

- React 18.0.0 or higher
- React DOM 18.0.0 or higher
- React Icons 5.0.0 or higher (for icons)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
