import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const layoutProps = [
  '$width',
  '$height',
  '$maxWidth',
  '$maxHeight',
  '$minWidth',
  '$minHeight',
  '$size',
  '$display',
  '$verticalAlign',
  '$overflow',
  '$overflowX',
  '$overflowY',
];

export const layout = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scale: 'sizes',
      scaleProps: layoutProps,
      unit: 'px',
    });
  }}
`;
