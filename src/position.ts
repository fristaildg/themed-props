import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const positionProps = ['$top', '$left', '$bottom', '$right'];

export const position = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'space',
      scaleProps: positionProps,
      unit: 'px',
    });
  }}
`;
