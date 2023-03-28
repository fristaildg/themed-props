import { css } from 'styled-components';
import { generateCSSfromProps } from './utils';

export const shadowProps = ['$boxShadow', '$textShadow'];

export const shadow = css`
  ${({ theme, ...props }) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'shadows',
      scaleProps: shadowProps,
    });
  }}
`;
