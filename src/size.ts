import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray } from './utils';

export const size = css`
  width: ${({ $width, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $width, 'px')};
  height: ${({ $height, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $height, 'px')};
  max-width: ${({ $maxWidth, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $maxWidth, 'px')};
  max-height: ${({ $maxHeight, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $maxHeight, 'px')};
  min-width: ${({ $minWidth, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $minWidth, 'px')};
  min-height: ${({ $minHeight, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $minHeight, 'px')};
  size: ${({ $size, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'sizes', $size, 'px')};
`;
