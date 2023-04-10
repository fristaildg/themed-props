import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const backgroundProps = [
  '$background',
  '$backgroundImage',
  '$backgroundSize',
  '$backgroundPosition',
  '$backgroundRepeat',
];

export const backgroundFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scaleProps: backgroundProps,
  });

export const background = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return backgroundFactory(theme, props);
  }}
`;
