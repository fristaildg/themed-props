import { css } from 'styled-components';
import { Theme, ThemedCSSProp } from './types';
import { borderFactory, borderFactoryExtra } from './border';
import { backgroundFactory } from './background';
import { colorFactory } from './color';
import { flexboxFactory } from './flexbox';
import { gridFactory } from './grid';
import { layoutFactory } from './layout';
import { positionFactory } from './position';
import { shadowFactory } from './shadow';
import { spaceFactory } from './space';
import { typographyFactory } from './typography';

const cssBlock = (prop: any, theme: Theme) => [
  ...borderFactory(theme, prop),
  ...borderFactoryExtra(theme, prop),
  ...backgroundFactory(theme, prop),
  ...colorFactory(theme, prop),
  ...flexboxFactory(theme, prop),
  ...gridFactory(theme, prop),
  ...layoutFactory(theme, prop),
  ...positionFactory(theme, prop),
  ...shadowFactory(theme, prop),
  ...spaceFactory(theme, prop),
  ...typographyFactory(theme, prop),
];

export const pseudoClass = css`
  &:hover {
    ${({ theme, $hover }: ThemedCSSProp) => !!$hover && cssBlock($hover, theme)}
  }
  &:active {
    ${({ theme, $active }: ThemedCSSProp) =>
      !!$active && cssBlock($active, theme)}
  }
  &:visited {
    ${({ theme, $visited }: ThemedCSSProp) =>
      !!$visited && cssBlock($visited, theme)}
  }
  &:focus {
    ${({ theme, $focus }: ThemedCSSProp) => !!$focus && cssBlock($focus, theme)}
  }
  &:focus-visible {
    ${({ theme, $focusVisible }: ThemedCSSProp) =>
      !!$focusVisible && cssBlock($focusVisible, theme)}
  }
  &:focus-within {
    ${({ theme, $focusWithin }: ThemedCSSProp) =>
      !!$focusWithin && cssBlock($focusWithin, theme)}
  }
  &:disabled {
    ${({ theme, $disabled }: ThemedCSSProp) =>
      !!$disabled && cssBlock($disabled, theme)}
  }
  &:checked {
    ${({ theme, $checked }: ThemedCSSProp) =>
      !!$checked && cssBlock($checked, theme)}
  }
`;
