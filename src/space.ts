import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const spaceProps = [
  '$margin',
  '$marginTop',
  '$marginBottom',
  '$marginLeft',
  '$marginRight',
  '$padding',
  '$paddingTop',
  '$paddingBottom',
  '$paddingLeft',
  '$paddingRight',
];

export const space = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'space',
      scaleProps: spaceProps,
      isOrdinalScale: true,
      unit: 'px',
    });
  }}
`;
