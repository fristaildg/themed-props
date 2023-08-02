import { Scale } from './types';
import { setCSS } from './utils';
import { ThemedStyledProps } from 'styled-components';

export const themeValue = (scale: Scale, value: string | number) => {
  return ({ theme }: ThemedStyledProps<any, any>) =>
    setCSS(theme, scale, value);
};
