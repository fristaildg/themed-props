import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray } from './utils';

export const shadow = css`
  box-shadow: ${({ $boxShadow, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'shadows', $boxShadow)};
  text-shadow: ${({ $textShadow, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'shadows', $textShadow)};
`;
