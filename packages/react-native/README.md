# Factorial One React Native

React Native implementation of the Factorial One Design System.

## Installation

```bash
npm install @factorialco/factorial-one-react-native
# or
yarn add @factorialco/factorial-one-react-native
# or
pnpm add @factorialco/factorial-one-react-native
```

## Usage

```tsx
import { ExampleComponent } from "@factorialco/factorial-one-react-native";

export default function App() {
  return <ExampleComponent text="Hello from Factorial One!" />;
}
```

## Icons

The package includes a set of icons that can be imported and used in your React Native application.

```tsx
import { Icon, AppIcons } from "@factorialco/factorial-one-react-native";

// Basic usage
<Icon icon={AppIcons.Calendar} size="md" />;

// With a different size
<Icon icon={AppIcons.Calendar} size="lg" />;
```

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
