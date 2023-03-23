import { css } from 'styled-components';
import { colorProps } from './color';
import { spaceProps } from './space';
import { ThemedCSSProp } from './types';
import { setCSSFromArray, setCSSValue } from './utils';
import { filterProps, propToCSS } from './utils';

export const hover = css`
  &:hover {
    ${({ theme, $hover }: ThemedCSSProp) =>
      !!$hover && [
        filterProps($hover, spaceProps).map(
          ([key, value]) => `
            ${propToCSS(key)}: ${setCSSFromArray(theme, 'space', value, 'px')};
          `,
        ),
        filterProps($hover, colorProps).map(
          ([key, value]) => `
            ${propToCSS(key)}: ${setCSSValue(theme, 'colors', value)};
          `,
        ),
      ]}
  }
`;
