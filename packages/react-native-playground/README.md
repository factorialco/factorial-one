# Starter base

A starting point to help you set up your project quickly and use the common components provided by `react-native-reusables`. The idea is to make it easier for you to get started.

## Features

- NativeWind v4
- Dark and light mode
  - Android Navigation Bar matches mode
  - Persistent mode
- Common components
  - ThemeToggle, Avatar, Button, Card, Progress, Text, Tooltip

<img src="https://github.com/mrzachnugent/react-native-reusables/assets/63797719/42c94108-38a7-498b-9c70-18640420f1bc"
     alt="starter-base-template"
     style="width:270px;" />

## Storybook v8

This project includes Storybook v8 integration for React Native. Storybook provides a way to visualize and test UI components in isolation.

### Running Storybook

To run Storybook on iOS:

```bash
pnpm storybook:ios
```

To run Storybook on Android:

```bash
pnpm storybook:android
```

### Adding Stories

Stories are located in the `stories/` directory. To add a new story:

1. Create your component in the `components/` directory
2. Create a `.stories.tsx` file in the `stories/` directory
3. Follow the format in the existing `ExampleComponent.stories.tsx` file

Example story structure:

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '../components/YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'UI/YourComponent',
  component: YourComponent,
  // Add parameters, argTypes, etc.
};

export default meta;

type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // Your component props
  },
};
```

### Switching Between App and Storybook

The application can run in two modes:
- Normal app mode (default)
- Storybook mode (when `EXPO_PUBLIC_STORYBOOK=true`)

Use the provided npm scripts to switch between modes.
