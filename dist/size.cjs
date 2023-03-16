'use strict';

var styledComponents = require('styled-components');
var setCSSValue = require('./utils/setCSSValue.cjs');

const size = styledComponents.css `
  width: ${({ $width, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $width, 'px')};
  height: ${({ $height, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $height, 'px')};
  max-width: ${({ $maxWidth, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $maxWidth, 'px')};
  max-height: ${({ $maxHeight, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $maxHeight, 'px')};
  min-width: ${({ $minWidth, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $minWidth, 'px')};
  min-height: ${({ $minHeight, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $minHeight, 'px')};
  size: ${({ $size, theme }) => setCSSValue.setCSSFromArray(theme, 'sizes', $size, 'px')};
`;

exports.size = size;
