import { css } from 'styled-components';
import { generateCSSfromProps } from './utils';
import { Theme } from './types';

export const shadowProps = ['$boxShadow', '$textShadow'];

export const shadowFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'shadows',
    scaleProps: shadowProps,
  });

export const shadow = css`
  ${({ theme, ...props }) => {
    return shadowFactory(theme, props);
  }}
`;
