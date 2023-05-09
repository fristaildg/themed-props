import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
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

export const spaceFactory = (theme: Theme, props: any) =>
  generateCSSfromProps({
    props,
    theme,
    scale: 'space',
    scaleProps: spaceProps,
    unit: 'px',
  });

export const spaceFactoryExtra = (theme: Theme, props: any) => [
  generateCSSRule({
    prop: props.$paddingX,
    targetCSS: ['padding-left', 'padding-right'],
    theme,
    scale: 'space',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$paddingY,
    targetCSS: ['padding-top', 'padding-bottom'],
    theme,
    scale: 'space',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$marginX,
    targetCSS: ['margin-left', 'margin-right'],
    theme,
    scale: 'space',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$marginY,
    targetCSS: ['margin-top', 'margin-bottom'],
    theme,
    scale: 'space',
    unit: 'px',
  }),
];

export const space = css`
  ${({ theme, $paddingX, $paddingY, $marginX, $marginY }: ThemedCSSProp) =>
    spaceFactoryExtra(theme, { $marginX, $marginY, $paddingX, $paddingY })}
  ${({ theme, ...props }: ThemedCSSProp) => {
    return spaceFactory(theme, props);
  }}
`;
