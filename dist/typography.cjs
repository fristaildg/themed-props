'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const typography = styledComponents.css `
  font-size: ${({ $fontSize, theme }) => setCSSValue.setCSSFromArray(theme, 'fontSizes', $fontSize, 'px')};
  font-weight: ${({ $fontWeight, theme }) => setCSSValue.setCSSFromArray(theme, 'fontWeights', $fontWeight)};
  line-height: ${({ theme, $lineHeight }) => setCSSValue.setCSSFromArray(theme, 'lineHeights', $lineHeight)};
  letter-spacing: ${({ theme, $letterSpacing }) => setCSSValue.setCSSFromArray(theme, 'letterSpacings', $letterSpacing, 'px')};
  font-family: ${({ $fontFamily, theme }) => setCSSValue.setCSSValue(theme, 'fonts', $fontFamily)};
`;

exports.typography = typography;
