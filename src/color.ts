import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const colorProps = ['$backgroundColor', '$color'];

export const color = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'colors',
      scaleProps: colorProps,
    });
  }}
`;
