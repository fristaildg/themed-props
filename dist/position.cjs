'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const position = styledComponents.css `
  top: ${({ $top, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $top, 'px')};
  left: ${({ $left, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $left, 'px')};
  bottom: ${({ $bottom, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $bottom, 'px')};
  right: ${({ $right, theme }) => setCSSValue.setCSSFromArray(theme, 'space', $right, 'px')};
`;

exports.position = position;
