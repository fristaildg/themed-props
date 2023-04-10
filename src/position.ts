import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const positionProps = [
  '$top',
  '$left',
  '$bottom',
  '$right',
  '$position',
  '$zIndex',
];

export const positionFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'space',
    scaleProps: positionProps,
    unit: 'px',
  });

export const position = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return positionFactory(theme, props);
  }}
`;
