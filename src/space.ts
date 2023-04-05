import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSfromProps, generateCSSRule } from './utils';

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
  '$gap',
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
  ${({ theme, $paddingX, $paddingY, $marginX, $marginY }: ThemedCSSProp) => [
    generateCSSRule({
      prop: $paddingX,
      targetCSS: ['padding-left', 'padding-right'],
      theme,
      scale: 'space',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $paddingY,
      targetCSS: ['padding-top', 'padding-bottom'],
      theme,
      scale: 'space',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $marginX,
      targetCSS: ['margin-left', 'margin-right'],
      theme,
      scale: 'space',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $marginY,
      targetCSS: ['margin-top', 'margin-bottom'],
      theme,
      scale: 'space',
      unit: 'px',
    }),
  ]}
`;
