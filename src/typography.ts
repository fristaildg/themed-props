import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray, setCSSValue } from './utils';

export const typography = css`
  ${({
    theme,
    $fontSize,
    $fontWeight,
    $lineHeight,
    $letterSpacing,
    $fontFamily,
  }: ThemedCSSProp) => css`
    font-size: ${setCSSFromArray(theme, 'fontSizes', $fontSize, 'px')};
    font-weight: ${setCSSFromArray(theme, 'fontWeights', $fontWeight)};
    line-height: ${setCSSFromArray(theme, 'lineHeights', $lineHeight)};
    letter-spacing: ${setCSSFromArray(
      theme,
      'letterSpacings',
      $letterSpacing,
      'px',
    )};
    font-family: ${setCSSValue(theme, 'fonts', $fontFamily)};
  `}
`;
