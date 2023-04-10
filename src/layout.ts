import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
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

export const layoutFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'sizes',
    scaleProps: layoutProps,
    unit: 'px',
  });

export const layout = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return layoutFactory(theme, props);
  }}
`;
