import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const gridProps = [
  '$gridGap',
  '$gridRowGap',
  '$gridColumnGap',
  '$gridColumn',
  '$gridRow',
  '$gridArea',
  '$gridAutoFlow',
  '$gridAutoRows',
  '$gridAutoColumns',
  '$gridTemplateRows',
  '$gridTemplateColumns',
  '$gridTemplateAreas',
];

export const gridFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'space',
    scaleProps: gridProps,
  });

export const grid = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return gridFactory(theme, props);
  }}
`;
