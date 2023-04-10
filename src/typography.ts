import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { generateCSSRule } from './utils';

export const typographyFactory = (theme: Theme, props: any) => [
  generateCSSRule({
    prop: props.$fontSize,
    targetCSS: ['font-size'],
    theme,
    scale: 'fontSizes',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$fontWeight,
    targetCSS: ['font-weight'],
    theme,
    scale: 'fontWeights',
  }),
  generateCSSRule({
    prop: props.$lineHeight,
    targetCSS: ['line-height'],
    theme,
    scale: 'lineHeights',
  }),
  generateCSSRule({
    prop: props.$letterSpacing,
    targetCSS: ['letter-spacing'],
    theme,
    scale: 'letterSpacings',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$letterSpacing,
    targetCSS: ['letter-spacing'],
    theme,
    scale: 'letterSpacings',
    unit: 'px',
  }),
  generateCSSRule({
    prop: props.$fontFamily,
    targetCSS: ['font-family'],
    theme,
    scale: 'fonts',
  }),
  generateCSSRule({
    prop: props.$textAlign,
    targetCSS: ['text-align'],
    theme,
  }),
  generateCSSRule({
    prop: props.$fontStyle,
    targetCSS: ['font-style'],
    theme,
  }),
];

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
  }: ThemedCSSProp) =>
    typographyFactory(theme, {
      $fontSize,
      $fontWeight,
      $lineHeight,
      $letterSpacing,
      $fontFamily,
      $textAlign,
      $fontStyle,
    })}
`;
