import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { generateCSSRule } from './utils';

export const typography = css`
  ${({
    theme,
    $fontSize,
    $fontWeight,
    $lineHeight,
    $letterSpacing,
    $fontFamily,
    $textAlign,
    $fontStyle,
  }: ThemedCSSProp) => [
    generateCSSRule({
      prop: $fontSize,
      targetCSS: ['font-size'],
      theme,
      scale: 'fontSizes',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $fontWeight,
      targetCSS: ['font-weight'],
      theme,
      scale: 'fontWeights',
    }),
    generateCSSRule({
      prop: $lineHeight,
      targetCSS: ['line-height'],
      theme,
      scale: 'lineHeights',
    }),
    generateCSSRule({
      prop: $letterSpacing,
      targetCSS: ['letter-spacing'],
      theme,
      scale: 'letterSpacings',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $letterSpacing,
      targetCSS: ['letter-spacing'],
      theme,
      scale: 'letterSpacings',
      unit: 'px',
    }),
    generateCSSRule({
      prop: $fontFamily,
      targetCSS: ['font-family'],
      theme,
      scale: 'fonts',
    }),
    generateCSSRule({
      prop: $textAlign,
      targetCSS: ['text-align'],
      theme,
    }),
    generateCSSRule({
      prop: $fontStyle,
      targetCSS: ['font-style'],
      theme,
    }),
  ]}
`;
