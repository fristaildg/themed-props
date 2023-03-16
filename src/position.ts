import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray } from './utils';

export const position = css`
  top: ${({ $top, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $top, 'px')};
  left: ${({ $left, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $left, 'px')};
  bottom: ${({ $bottom, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $bottom, 'px')};
  right: ${({ $right, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $right, 'px')};
`;
