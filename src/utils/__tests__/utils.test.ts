import { filterProps, propToCSS, generateCSSfromProps } from '../utils';
import mockTheme from '../../mockTheme';
import { Scale } from '../../types';

const sampleProps = {
  $top: 1,
  $color: 'primary.1',
  test: 'test',
};
const positionProps = ['$top', '$left', '$bottom', '$right'];
const sampleConfig = {
  props: sampleProps,
  theme: mockTheme,
  scale: 'space' as Scale,
  scaleProps: positionProps,
  isOrdinalScale: true,
  unit: 'px',
};

describe('propToCSS', () => {
  it('should return a string in kebab-case', () => {
    expect(propToCSS('$testProp')).toBe('test-prop');
  });
});

describe('filterProps', () => {
  it('should return a list of props only if they exist in the 2nd parameter', () => {
    expect(filterProps(sampleProps, positionProps)).toStrictEqual([
      ['$top', 1],
    ]);
  });
});

describe('generateCSSFromProps', () => {
  it('should generate a valid CSS string', () => {
    expect(generateCSSfromProps(sampleConfig)).toStrictEqual(['top: 4px;']);
  });
});
