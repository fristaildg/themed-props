import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const sizeProps = [
  '$width',
  '$height',
  '$maxWidth',
  '$maxHeight',
  '$minWidth',
  '$minHeight',
  '$size',
];

export const size = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'sizes',
      scaleProps: sizeProps,
      isOrdinalScale: true,
      unit: 'px',
    });
  }}
`;
