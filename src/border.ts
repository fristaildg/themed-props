import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSfromProps, generateCSSRule } from './utils';

export const borderProps = [
  '$border',
  '$borderTop',
  '$borderRight',
  '$borderBottom',
  '$borderLeft',
  '$borderWidth',
  '$borderStyle',
  '$borderTopWidth',
  '$borderTopStyle',
  '$borderRightWidth',
  '$borderRightStyle',
  '$borderBottomWidth',
  '$borderBottomStyle',
  '$borderLeftWidth',
  '$borderLeftStyle',
];

export const borderColorProps = [
  '$borderColor',
  '$borderTopColor',
  '$borderRightColor',
  '$borderBottomColor',
  '$borderLeftColor',
];

export const borderRadiusProps = [
  '$borderRadius',
  '$borderTopLeftRadius',
  '$borderTopRightRadius',
  '$borderBottomLeftRadius',
  '$borderBottomRightRadius',
];

export const borderFactory = (theme: Theme, props: any) => [
  generateCSSfromProps({
    props,
    theme,
    scale: 'borders',
    scaleProps: borderProps,
  }),
  generateCSSfromProps({
    props,
    theme,
    scale: 'colors',
    scaleProps: borderColorProps,
  }),
  generateCSSfromProps({
    props,
    theme,
    scale: 'radii',
    scaleProps: borderRadiusProps,
    unit: 'px',
  }),
];

export const borderFactoryExtra = (theme: Theme, props: any) => [
  generateCSSRule({
    prop: props.$borderX,
    targetCSS: ['border-left', 'border-right'],
    theme,
    scale: 'borders',
  }),
  generateCSSRule({
    prop: props.$borderY,
    targetCSS: ['border-top', 'border-bottom'],
    theme,
    scale: 'borders',
  }),
];

export const border = css`
  ${({ theme, ...props }: ThemedCSSProp) => borderFactory(theme, props)}
  ${({ theme, $borderX, $borderY }: ThemedCSSProp) =>
    borderFactoryExtra(theme, { $borderX, $borderY })}
`;
