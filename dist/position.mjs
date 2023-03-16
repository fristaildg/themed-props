import { css } from 'styled-components';
import { setCSSFromArray } from './utils/setCSSValue.mjs';

const position = css `
  top: ${({ $top, theme }) => setCSSFromArray(theme, 'space', $top, 'px')};
  left: ${({ $left, theme }) => setCSSFromArray(theme, 'space', $left, 'px')};
  bottom: ${({ $bottom, theme }) => setCSSFromArray(theme, 'space', $bottom, 'px')};
  right: ${({ $right, theme }) => setCSSFromArray(theme, 'space', $right, 'px')};
`;

export { position };
