import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
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

export const grid = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'space',
      scaleProps: gridProps,
    });
  }}
`;
