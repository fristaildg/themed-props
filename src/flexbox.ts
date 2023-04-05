import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
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

export const flexbox = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return generateCSSfromProps({
      props,
      theme,
      scaleProps: flexboxProps,
    });
  }}
`;
