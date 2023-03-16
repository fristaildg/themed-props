import { css } from 'styled-components';
import { setCSSFromArray } from './utils/setCSSValue.mjs';

const space = css `
  margin: ${({ $margin, theme }) => setCSSFromArray(theme, 'space', $margin, 'px')};
  margin-top: ${({ $marginTop, theme }) => setCSSFromArray(theme, 'space', $marginTop, 'px')};
  margin-bottom: ${({ $marginBottom, theme }) => setCSSFromArray(theme, 'space', $marginBottom, 'px')};
  margin-left: ${({ $marginLeft, theme }) => setCSSFromArray(theme, 'space', $marginLeft, 'px')};
  margin-right: ${({ $marginRight, theme }) => setCSSFromArray(theme, 'space', $marginRight, 'px')};
  ${({ $marginY, theme }) => css `
    margin-top: ${setCSSFromArray(theme, 'space', $marginY, 'px')};
    margin-bottom: ${setCSSFromArray(theme, 'space', $marginY, 'px')};
  `}
  ${({ $marginX, theme }) => css `
    margin-left: ${setCSSFromArray(theme, 'space', $marginX, 'px')};
    margin-right: ${setCSSFromArray(theme, 'space', $marginX, 'px')};
  `}
  padding: ${({ $padding, theme }) => setCSSFromArray(theme, 'space', $padding, 'px')};
  padding-top: ${({ $paddingTop, theme }) => setCSSFromArray(theme, 'space', $paddingTop, 'px')};
  padding-bottom: ${({ $paddingBottom, theme }) => setCSSFromArray(theme, 'space', $paddingBottom, 'px')};
  padding-left: ${({ $paddingLeft, theme }) => setCSSFromArray(theme, 'space', $paddingLeft, 'px')};
  padding-right: ${({ $paddingRight, theme }) => setCSSFromArray(theme, 'space', $paddingRight, 'px')};
  ${({ $paddingY, theme }) => css `
    padding-top: ${setCSSFromArray(theme, 'space', $paddingY, 'px')};
    padding-bottom: ${setCSSFromArray(theme, 'space', $paddingY, 'px')};
  `}
  ${({ $paddingX, theme }) => css `
    padding-left: ${setCSSFromArray(theme, 'space', $paddingX, 'px')};
    padding-right: ${setCSSFromArray(theme, 'space', $paddingX, 'px')};
  `}
`;

export { space };
