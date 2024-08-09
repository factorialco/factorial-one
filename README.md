# Factorial One

[![Build and Publish Storybook to GitHub Pages](https://github.com/factorialco/factorial-one/actions/workflows/deploy.yaml/badge.svg)](https://github.com/josepjaume/factorial-one/actions/workflows/deploy.yaml)
[![Storybook Tests](https://github.com/factorialco/factorial-one/actions/workflows/storybook-tests.yaml/badge.svg)](https://github.com/josepjaume/factorial-one/actions/workflows/storybook-tests.yaml)

[factorialco.github.io/factorial-one/](https://factorialco.github.io/factorial-one/)

## Usage

In your react project:

```bash
$ npm install git+https://github.com/factorialco/factorial-one#release
```

Then, in your react files:

```tsx
// In your `main.tsx` file or any top-level component
import "@factorialco/factorial-one/dist/styles.css"

// If you want to use the shipped fonts
import "@factorialco/factorial-one/dist/fonts.js"

// In any of your components
import { Button } from "@factorialco/factorial-one"
```

And that's it!

## Development

### Install nodejs

The recommended approach is to use the `asdf` dependency manager. On MacOS +
Homebrew:

```bash
$ brew install asdf
$ echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${
```

Then open a new terminal:

```bash
$ asdf plugin add nodejs
```

Then, `cd` into the project's directory and:

```bash
$ asdf install
```

This should leave you with a fully working nodejs version.

### Start the project

First, install the dependencies:

```bash
$ npm install
```

Then run the storybook server:

```bash
$ npm start
```
