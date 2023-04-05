import { setCSSFromObject, setCSSFromArray, setCSS } from '../setCSS';
import defaultTheme from '../../mockTheme';

describe('setCSS', () => {
  describe('if "prop" is not passed', () => {
    it('should return undefined', () => {
      expect(setCSS(defaultTheme, 'colors')).toBe(undefined);
    });
  });
});

describe('setCSSFromObject', () => {
  describe("if 'prop' is passed", () => {
    describe("and it's value matches a theme prop", () => {
      it('should return a value from the theme', () => {
        expect(setCSSFromObject(defaultTheme, 'colors', 'text')).toBe(
          '#0F1B2C',
        );
      });
    });

    describe("and it's value doesn't match a theme prop", () => {
      it('should return whatever is being passed to "prop"', () => {
        expect(setCSSFromObject(defaultTheme, 'colors', 'green')).toBe('green');
      });
    });

    describe('and it contains an ordinal suffix', () => {
      it('should return a value from the theme matching the index from an array of values', () => {
        expect(setCSSFromObject(defaultTheme, 'colors', 'primary.1')).toBe(
          '#e63946',
        );
      });

      it('should return undefined is being passed if ordinal number does not exist', () => {
        expect(setCSSFromObject(defaultTheme, 'colors', 'primary.3')).toBe(
          undefined,
        );
      });
    });
  });
});

describe('setCSSFromArray', () => {
  describe("if 'prop' is passed", () => {
    describe('and it is of type number', () => {
      it('should return the matching index value of the theme in px', () => {
        expect(setCSSFromArray(defaultTheme, 'space', 1, 'px')).toBe('4px');
      });

      it('should return undefined if there is no matching index', () => {
        expect(setCSSFromArray(defaultTheme, 'space', 10)).toBe(undefined);
      });
    });
  });
});
