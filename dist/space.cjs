'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const space = styledComponents.css `
  margin: ${({ $margin, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $margin, 'px')};
  margin-top: ${({ $marginTop, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $marginTop, 'px')};
  margin-bottom: ${({ $marginBottom, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $marginBottom, 'px')};
  margin-left: ${({ $marginLeft, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $marginLeft, 'px')};
  margin-right: ${({ $marginRight, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $marginRight, 'px')};
  ${({ $marginY, theme }) => styledComponents.css `
    margin-top: ${setCSSValue.setCSSFromArray(theme, 'space', $marginY, 'px')};
    margin-bottom: ${setCSSValue.setCSSFromArray(theme, 'space', $marginY, 'px')};
  `}
  ${({ $marginX, theme }) => styledComponents.css `
    margin-left: ${setCSSValue.setCSSFromArray(theme, 'space', $marginX, 'px')};
    margin-right: ${setCSSValue.setCSSFromArray(theme, 'space', $marginX, 'px')};
  `}
  padding: ${({ $padding, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $padding, 'px')};
  padding-top: ${({ $paddingTop, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $paddingTop, 'px')};
  padding-bottom: ${({ $paddingBottom, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $paddingBottom, 'px')};
  padding-left: ${({ $paddingLeft, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $paddingLeft, 'px')};
  padding-right: ${({ $paddingRight, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $paddingRight, 'px')};
  ${({ $paddingY, theme }) => styledComponents.css `
    padding-top: ${setCSSValue.setCSSFromArray(theme, 'space', $paddingY, 'px')};
    padding-bottom: ${setCSSValue.setCSSFromArray(theme, 'space', $paddingY, 'px')};
  `}
  ${({ $paddingX, theme }) => styledComponents.css `
    padding-left: ${setCSSValue.setCSSFromArray(theme, 'space', $paddingX, 'px')};
    padding-right: ${setCSSValue.setCSSFromArray(theme, 'space', $paddingX, 'px')};
  `}
`;

exports.space = space;
