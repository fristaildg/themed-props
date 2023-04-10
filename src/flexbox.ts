import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';

export const flexboxProps = [
  '$alignItems',
  '$alignContent',
  '$justifyItems',
  '$justifyContent',
  '$flexWrap',
  '$flexDirection',
  '$flex',
  '$flexGrow',
  '$flexShrink',
  '$flexBasis',
  '$justifySelf',
  '$alignSelf',
  '$order',
];

export const flexboxFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scaleProps: flexboxProps,
  });

export const flexbox = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return flexboxFactory(theme, props);
  }}
`;
