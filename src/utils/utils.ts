import { Scale, Theme } from '../types';
import { setCSS } from './setCSS';

export const propToCSS = (prop: string) => {
  // transform the transcient $camelCase prop to kebab-case and slice the "$" from the beginning so that it is used as a CSS prop ($backgroundColor -> background-color)
  return prop.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`).slice(1);
};

export const filterProps = (
  props: Record<string, string | number | undefined>,
  propsToFilter: string[],
) => {
  return Object.entries(props).filter(
    (prop) => propsToFilter.indexOf(prop[0]) !== -1,
  );
};

type CSSRuleConfig = {
  prop: string | number;
  targetCSS: string[];
  theme: Theme;
  scale?: Scale;
  unit?: string;
};

export const generateCSSRule = ({
  prop,
  targetCSS,
  theme,
  scale,
  unit,
}: CSSRuleConfig) => {
  if (prop) {
    return targetCSS.map((targetCSS) => {
      if (Array.isArray(prop)) {
        return setResponsiveCSS(targetCSS, theme, scale, prop, unit);
      }

      return `${targetCSS}: ${setCSS(theme, scale, prop, unit)};`;
    });
  }

  return undefined;
};

type CSSArrayConfig = {
  props: Record<string, string | number>;
  scaleProps: string[];
  theme: Theme;
  scale?: Scale;
  unit?: string;
};

export const generateCSSfromProps = ({
  props,
  scaleProps,
  theme,
  scale,
  unit,
}: CSSArrayConfig) => {
  return filterProps(props, scaleProps).map(([key, value]) => {
    if (Array.isArray(value)) {
      return setResponsiveCSS(propToCSS(key), theme, scale, value, unit);
    }

    return `${propToCSS(key)}: ${setCSS(theme, scale, value, unit)};`;
  });
};

function setResponsiveCSS(
  cssRule: string,
  theme: Theme,
  scale?: Scale,
  value?: string | number[],
  unit?: string,
) {
  const mediaQueries = theme['breakpoints'].map(
    (breakpoint: number, index: number) => {
      const breakpointValue = value && value[index + 1];

      if (breakpointValue) {
        return `
          @media screen and (min-width: ${breakpoint}px) {
            ${cssRule}: ${setCSS(theme, scale, breakpointValue, unit)};
          }
        `;
      }
    },
  );

  return [
    `
      ${cssRule}: ${setCSS(theme, scale, value && value[0], unit)};
    `,
    ...mediaQueries,
  ];
}
