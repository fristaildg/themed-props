'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const color = styledComponents.css `
  background-color: ${({ $backgroundColor, theme }) => setCSSValue.setCSSValue(theme, 'colors', $backgroundColor)};
  color: ${({ $color, theme }) => setCSSValue.setCSSValue(theme, 'colors', $color)};
`;

exports.color = color;
