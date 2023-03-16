import { Theme } from './types';

const colors = {
  primary: ['#e63946', '#7F1019'],
  secondary: ['#457B9D', '#274659'],
  text: '#0F1B2C',
  background: '#f1faee',
  modes: {
    dark: {
      text: '#f1faee',
      background: '#0F1B2C',
      primary: ['#457B9D', '#274659'],
      secondary: ['#e63946', '#7F1019'],
    },
  },
};

const fonts = {
  serif: "'Karma', serif",
  'sans-serif': ["'Nunito Sans', sans-serif", "'Scada', sans-serif"],
};

const space = [0, 4, 8, 16, 24, 32, 40, 48, 66, 74];
const sizes = [...space, 128, 256];
const fontSizes = space;
const letterSpacings = space;
const fontWeights = [0, 200, 300, 400, 600, 700, 800, 900];
const lineHeights = [0, 0.5, 1, 1.5, 2];
const shadows = [
  'none',
  '0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);',
  '0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);',
  '0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1);',
  '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);',
  '0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2);',
  '0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18);',
  '0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);',
  '0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);',
];

const themeDefault: Theme = {
  name: 'default',
  colors,
  space,
  sizes,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  shadows,
  fonts,
};

export default themeDefault;
