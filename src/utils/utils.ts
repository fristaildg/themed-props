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

type Config = {
  props: Record<string, string | number>;
  scaleProps: string[];
  theme: Theme;
  scale: Scale;
  unit?: string;
};

export const generateCSSfromProps = ({
  props,
  scaleProps,
  theme,
  scale,
  unit,
}: Config) => {
  return filterProps(props, scaleProps).map(
    ([key, value]) =>
      `${propToCSS(key)}: ${setCSS(theme, scale, value, unit)};`,
  );
};
