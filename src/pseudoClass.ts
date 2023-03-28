import { css } from 'styled-components';
import { colorProps } from './color';
import { spaceProps } from './space';
import { Theme, ThemedCSSProp } from './types';
import { setCSS } from './utils';
import { filterProps, propToCSS } from './utils';

const cssBlock = (prop: any, theme: Theme) => [
  filterProps(prop, spaceProps).map(
    ([key, value]) => `
            ${propToCSS(key)}: ${setCSS(theme, 'space', value, 'px')};
          `,
  ),
  filterProps(prop, colorProps).map(
    ([key, value]) => `
            ${propToCSS(key)}: ${setCSS(theme, 'colors', value)};
          `,
  ),
];

export const pseudoClass = css`
  &:hover {
    ${({ theme, $hover }: ThemedCSSProp) => !!$hover && cssBlock($hover, theme)}
  }
  &:active {
    ${({ theme, $active }: ThemedCSSProp) =>
      !!$active && cssBlock($active, theme)}
  }
  &:visited {
    ${({ theme, $visited }: ThemedCSSProp) =>
      !!$visited && cssBlock($visited, theme)}
  }
  &:focus {
    ${({ theme, $focus }: ThemedCSSProp) => !!$focus && cssBlock($focus, theme)}
  }
  &:focus-visible {
    ${({ theme, $focusVisible }: ThemedCSSProp) =>
      !!$focusVisible && cssBlock($focusVisible, theme)}
  }
  &:focus-within {
    ${({ theme, $focusWithin }: ThemedCSSProp) =>
      !!$focusWithin && cssBlock($focusWithin, theme)}
  }
`;
