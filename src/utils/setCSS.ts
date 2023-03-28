import { Scale, Theme } from '../types';

export const setCSS = (
  theme: Theme,
  scale: Scale,
  prop?: string | number,
  unit?: string,
) => {
  if (prop && typeof prop === 'number')
    return setCSSFromArray(theme, scale, prop, unit);

  if (prop && typeof prop === 'string') return setCSSValue(theme, scale, prop);

  return undefined;
};

export const setCSSValue = (
  theme: Theme,
  scale: Scale,
  prop?: string | number,
) => {
  if (prop) {
    const [scaleName, scalePositon] = prop.toString().split('.');

    return theme[scale][scaleName]
      ? scalePositon
        ? (theme[scale][scaleName] as string[])[Number(scalePositon) - 1]
        : theme[scale][scaleName]
      : prop;
  }

  return undefined;
};

export const setCSSFromArray = (
  theme: Theme,
  scale: Scale,
  prop?: string | number,
  unit?: string,
) => {
  if (prop && typeof prop === 'number') {
    return theme[scale][prop] && `${theme[scale][prop]}${unit ?? ''}`;
  }

  return undefined;
};
