import { css } from 'styled-components';
import { setCSSFromArray } from './utils/setCSSValue.mjs';

const shadow = css `
  box-shadow: ${({ $boxShadow, theme }) => setCSSFromArray(theme, 'shadows', $boxShadow)};
  text-shadow: ${({ $textShadow, theme }) => setCSSFromArray(theme, 'shadows', $textShadow)};
`;

export { shadow };
