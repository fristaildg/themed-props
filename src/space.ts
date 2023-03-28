import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps } from './utils';
import { setCSS } from './utils';

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
      unit: 'px',
    });
  }}
  ${({ theme, $paddingX, $paddingY, $marginX, $marginY }: ThemedCSSProp) => css`
    padding-top: ${setCSS(theme, 'space', $paddingY, 'px')};
    padding-bottom: ${setCSS(theme, 'space', $paddingY, 'px')};
    padding-left: ${setCSS(theme, 'space', $paddingX, 'px')};
    padding-right: ${setCSS(theme, 'space', $paddingX, 'px')};
    margin-top: ${setCSS(theme, 'space', $marginY, 'px')};
    margin-bottom: ${setCSS(theme, 'space', $marginY, 'px')};
    margin-left: ${setCSS(theme, 'space', $marginX, 'px')};
    margin-right: ${setCSS(theme, 'space', $marginX, 'px')};
  `}
`;
