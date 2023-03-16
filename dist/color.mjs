import { css } from 'styled-components';
import { setCSSValue } from './utils/setCSSValue.mjs';

const color = css `
  background-color: ${({ $backgroundColor, theme }) => setCSSValue(theme, 'colors', $backgroundColor)};
  color: ${({ $color, theme }) => setCSSValue(theme, 'colors', $color)};
`;

export { color };
