# Factorial One Design System

Factorial One is a comprehensive design system for building consistent user interfaces across web and mobile platforms.

## Packages

This monorepo contains the following packages:

- `@factorialco/factorial-one-core`: Core tokens and utilities shared across platforms (located in `packages/core`)
- `@factorialco/factorial-one-react-native`: React Native implementation of the design system (located in `packages/react-native`)
- `@factorialco/factorial-one`: React implementation of the design system (existing)

## Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Setup

```bash
# Install dependencies
pnpm install
```

### Building

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm --filter @factorialco/factorial-one-core build
pnpm --filter @factorialco/factorial-one-react-native build
```

### Testing

```bash
# Run tests for all packages
pnpm test

# Run tests for a specific package
pnpm --filter @factorialco/factorial-one-core test
pnpm --filter @factorialco/factorial-one-react-native test
```

## License

MIT