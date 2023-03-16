import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSValue } from './utils';

export const color = css`
  background-color: ${({ $backgroundColor, theme }: ThemedCSSProp) =>
    setCSSValue(theme, 'colors', $backgroundColor)};
  color: ${({ $color, theme }: ThemedCSSProp) =>
    setCSSValue(theme, 'colors', $color)};
`;
