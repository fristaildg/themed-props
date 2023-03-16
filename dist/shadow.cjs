'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const shadow = styledComponents.css `
  box-shadow: ${({ $boxShadow, theme }) => setCSSValue.setCSSFromArray(theme, 'shadows', $boxShadow)};
  text-shadow: ${({ $textShadow, theme }) => setCSSValue.setCSSFromArray(theme, 'shadows', $textShadow)};
`;

exports.shadow = shadow;
