import { css } from 'styled-components';
import { setCSSFromArray } from './utils/setCSSValue.mjs';

const size = css `
  width: ${({ $width, theme }) => setCSSFromArray(theme, 'sizes', $width, 'px')};
  height: ${({ $height, theme }) => setCSSFromArray(theme, 'sizes', $height, 'px')};
  max-width: ${({ $maxWidth, theme }) => setCSSFromArray(theme, 'sizes', $maxWidth, 'px')};
  max-height: ${({ $maxHeight, theme }) => setCSSFromArray(theme, 'sizes', $maxHeight, 'px')};
  min-width: ${({ $minWidth, theme }) => setCSSFromArray(theme, 'sizes', $minWidth, 'px')};
  min-height: ${({ $minHeight, theme }) => setCSSFromArray(theme, 'sizes', $minHeight, 'px')};
  size: ${({ $size, theme }) => setCSSFromArray(theme, 'sizes', $size, 'px')};
`;

export { size };
