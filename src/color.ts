import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const colorProps = ['$backgroundColor', '$color'];

export const colorFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'colors',
    scaleProps: colorProps,
  });

export const color = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return colorFactory(theme, props);
  }}
`;
