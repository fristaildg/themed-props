import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSS } from './utils';

export const typography = css`
  ${({
    theme,
    $fontSize,
    $fontWeight,
    $lineHeight,
    $letterSpacing,
    $fontFamily,
  }: ThemedCSSProp) => css`
    font-size: ${setCSS(theme, 'fontSizes', $fontSize, 'px')};
    font-weight: ${setCSS(theme, 'fontWeights', $fontWeight)};
    line-height: ${setCSS(theme, 'lineHeights', $lineHeight)};
    letter-spacing: ${setCSS(theme, 'letterSpacings', $letterSpacing, 'px')};
    font-family: ${setCSS(theme, 'fonts', $fontFamily)};
  `}
`;
