import { css } from 'styled-components';
import { setCSSFromArray, setCSSValue } from './utils/setCSSValue.mjs';

const typography = css `
  font-size: ${({ $fontSize, theme }) => setCSSFromArray(theme, 'fontSizes', $fontSize, 'px')};
  font-weight: ${({ $fontWeight, theme }) => setCSSFromArray(theme, 'fontWeights', $fontWeight)};
  line-height: ${({ theme, $lineHeight }) => setCSSFromArray(theme, 'lineHeights', $lineHeight)};
  letter-spacing: ${({ theme, $letterSpacing }) => setCSSFromArray(theme, 'letterSpacings', $letterSpacing, 'px')};
  font-family: ${({ $fontFamily, theme }) => setCSSValue(theme, 'fonts', $fontFamily)};
`;

export { typography };
