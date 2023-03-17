# Themed Props

React props for easy theme-aware styles to use with [Styled Components](https://styled-components.com/). This package is inspired by [Styled System](https://styled-system.com/) which is no longer maintained, yet it's not a drop-in replacement for it, since it only works with Styled Components and still lacks some props that are not strictly connected to the Theme specification.

> This is a companion library for [Create React DS](https://github.com/fristaildg/create-react-ds), although it can be issued in any project that relies on Styled Component and leverages a Theme, whether it is a components library, design system or web application. As an alternative, please checkout the awesome framework [Theme UI](https://theme-ui.com/)

[![NPM](https://img.shields.io/npm/v/themed-props)](https://www.npmjs.com/package/themed-props)

## Installation

You can install Themed Props using npm:

```sh
npm i themed-props
```

Themed Props has a dependency on Styled Components, so make sure to install that as well if you haven't already:

```sh
npm i styled-components
```

## Usage

Here's an example of how to use Themed Props with a styled component:

```jsx
import styled from 'styled-components';
import { space, color } from 'themed-props';

const Box = styled.div`
  ${space}
  ${color}
`
```
Now you can pass [`trascient` props](https://styled-components.com/docs/faqs#transient-props-since-51) to your `Box` component that correspond to the `space` and `color` functions

```jsx
<Box $marginTop={1} $paddingY={2} $backgroundColor="primary" />
```

The values `1` and `2` are tied specifically to your theme specification of the `spaces` scale, you can also pass any valid css value like `'15px'` or `'1rem'`, though the idea of this library is to leverage your Theme scales and keep your layout consistent.

## Theme scales

The value `'primary'` in `backGroundColor` also references a theme value from the `colors` scale, the diference between `spaces` scale and `colors` scale is that the former is ordinal (an array of values) and the latter is key-value based.

```js
const theme = {
  colors: {
    primary: '#0A2F51',
    secondary: 'green',
    text: '#000000',
  },
  spaces: [0, 8, 16, 24, 32],
}
```

You could also have an array of values `theme.colors.primary`, like

```js
colors: {
    primary: ['#0A2F51', '#137177', '#188977', '#74C67A'],
  },
```

In this case, you would reference any of these values from it's position in the array (starting from 1 instead of 0), like so:

```jsx
// This would match theme.colors.primary[1]
<Button $color="primary.2" />
```

> For a complete list of scales and how they should be created, take a look at the sample theme file in [`src/mockTheme`](src/mockTheme.ts) in this repo

Made with Love!! ❤️
