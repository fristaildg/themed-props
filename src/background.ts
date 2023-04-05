import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const backgroundProps = [
  '$background',
  '$backgroundImage',
  '$backgroundSize',
  '$backgroundPosition',
  '$backgroundRepeat',
];

export const background = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scaleProps: backgroundProps,
    });
  }}
`;
