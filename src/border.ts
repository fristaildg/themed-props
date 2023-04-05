import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
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

export const border = css`
  ${({ theme, ...props }: ThemedCSSProp) => {
    return [
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
  }}
  ${({ theme, $borderX, $borderY }: ThemedCSSProp) => [
    generateCSSRule({
      prop: $borderX,
      targetCSS: ['border-left', 'border-right'],
      theme,
      scale: 'borders',
    }),
    generateCSSRule({
      prop: $borderY,
      targetCSS: ['border-top', 'border-bottom'],
      theme,
      scale: 'borders',
    }),
  ]}
`;
