import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray, setCSSValue } from './utils';

export const typography = css`
  font-size: ${({ $fontSize, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'fontSizes', $fontSize, 'px')};
  font-weight: ${({ $fontWeight, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'fontWeights', $fontWeight)};
  line-height: ${({ theme, $lineHeight }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'lineHeights', $lineHeight)};
  letter-spacing: ${({ theme, $letterSpacing }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'letterSpacings', $letterSpacing, 'px')};
  font-family: ${({ $fontFamily, theme }: ThemedCSSProp) =>
    setCSSValue(theme, 'fonts', $fontFamily)};
`;
