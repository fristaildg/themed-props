import { css } from 'styled-components';
import { ThemedCSSProp } from './types';
import { setCSSFromArray } from './utils';

export const space = css`
  margin: ${({ $margin, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $margin, 'px')};
  margin-top: ${({ $marginTop, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $marginTop, 'px')};
  margin-bottom: ${({ $marginBottom, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $marginBottom, 'px')};
  margin-left: ${({ $marginLeft, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $marginLeft, 'px')};
  margin-right: ${({ $marginRight, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $marginRight, 'px')};
  ${({ $marginY, theme }: ThemedCSSProp) => css`
    margin-top: ${setCSSFromArray(theme, 'space', $marginY, 'px')};
    margin-bottom: ${setCSSFromArray(theme, 'space', $marginY, 'px')};
  `}
  ${({ $marginX, theme }: ThemedCSSProp) => css`
    margin-left: ${setCSSFromArray(theme, 'space', $marginX, 'px')};
    margin-right: ${setCSSFromArray(theme, 'space', $marginX, 'px')};
  `}
  padding: ${({ $padding, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $padding, 'px')};
  padding-top: ${({ $paddingTop, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $paddingTop, 'px')};
  padding-bottom: ${({ $paddingBottom, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $paddingBottom, 'px')};
  padding-left: ${({ $paddingLeft, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $paddingLeft, 'px')};
  padding-right: ${({ $paddingRight, theme }: ThemedCSSProp) =>
    setCSSFromArray(theme, 'space', $paddingRight, 'px')};
  ${({ $paddingY, theme }: ThemedCSSProp) => css`
    padding-top: ${setCSSFromArray(theme, 'space', $paddingY, 'px')};
    padding-bottom: ${setCSSFromArray(theme, 'space', $paddingY, 'px')};
  `}
  ${({ $paddingX, theme }: ThemedCSSProp) => css`
    padding-left: ${setCSSFromArray(theme, 'space', $paddingX, 'px')};
    padding-right: ${setCSSFromArray(theme, 'space', $paddingX, 'px')};
  `}
`;
