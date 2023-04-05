import { Scale, Theme } from '../types';

export const setCSS = (
  theme: Theme,
  scale?: Scale,
  prop?: string | number | unknown[],
  unit?: string,
) => {
  if ((prop || prop === 0) && typeof prop === 'number' && scale) {
    return setCSSFromArray(theme, scale, Number(prop), unit);
  }

  if (prop && typeof prop === 'string' && scale)
    return setCSSFromObject(theme, scale, prop);

  if (prop && !scale) return prop;

  return undefined;
};

export const setCSSFromObject = (
  theme: Theme,
  scale: Scale,
  prop: string | number,
) => {
  const [scaleName, scalePositon] = prop.toString().split('.');

  const value = theme[scale][scaleName]
    ? scalePositon
      ? (theme[scale][scaleName] as string[])[Number(scalePositon) - 1]
      : theme[scale][scaleName]
    : prop;

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export const setCSSFromArray = (
  theme: Theme,
  scale: Scale,
  prop: string | number,
  unit?: string,
) => {
  return theme[scale][prop] && `${theme[scale][prop]}${unit ?? ''}`;
};
