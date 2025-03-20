# Factorial One Core

Core tokens and utilities for the Factorial One Design System.

## Installation

```bash
npm install @factorialco/factorial-one-core
# or
yarn add @factorialco/factorial-one-core
# or
pnpm add @factorialco/factorial-one-core
```

## Usage

```tsx
import { semanticColors, spacing, fontSizes } from '@factorialco/factorial-one-core';

// Use tokens in your styles
const styles = {
  container: {
    padding: spacing[4],
    backgroundColor: semanticColors.background.default.light,
  },
  text: {
    fontSize: fontSizes.base,
    color: semanticColors.foreground.default.light,
  },
};
```

## Available Tokens

- `semanticColors`: Semantic color tokens for light and dark themes
- `baseColors`: Raw color values
- `spacing`: Spacing scale
- `fontSizes`: Font size scale
- `fontWeights`: Font weight values
- `lineHeights`: Line height values
- `letterSpacings`: Letter spacing values
- `borderRadius`: Border radius values

## Development

### Building

```bash
pnpm build
```

### Testing

```bash
pnpm test
```

## License

MIT 