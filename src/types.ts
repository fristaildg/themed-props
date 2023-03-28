export type Scale =
  | 'colors'
  | 'space'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'shadows'
  | 'fonts'
  | 'sizes';

export type Theme = {
  name: string;
  colors?: any;
  space?: number[];
  fonts?: any;
  fontSizes?: number[];
  fontWeights?: number[];
  lineHeights?: number[];
  letterSpacings?: number[];
  sizes?: number[];
  shadows?: string[];
};

export type ColorProps = {
  $backgroundColor?: string;
  $color?: string;
  $borderColor?: string;
  $borderTopColor?: string;
  $borderRightColor?: string;
  $borderLeftColor?: string;
  $borderBottomColor?: string;
};

export type SpaceProps = {
  [K in
    | '$margin'
    | '$marginTop'
    | '$marginBottom'
    | '$marginLeft'
    | '$marginRight'
    | '$marginY'
    | '$marginX'
    | '$padding'
    | '$paddingTop'
    | '$paddingBottom'
    | '$paddingLeft'
    | '$paddingRight'
    | '$paddingY'
    | '$paddingX']?: string | number;
};

export type TypographyProps = {
  [K in
    | '$fontSize'
    | '$fontWeight'
    | '$lineHeight'
    | '$letterSpacing'
    | '$fontFamily']?: string | number;
};

export type SizeProps = {
  [K in
    | '$width'
    | '$height'
    | '$maxWidth'
    | '$maxHeight'
    | '$minWidth'
    | '$minHeight'
    | '$size']?: string | number;
};

export type PositionProps = {
  [K in '$top' | '$right' | '$bottom' | '$left']?: string | number;
};

export type ShadowProps = {
  $boxShadow?: string | number;
  $textShadow?: string | number;
};

export type ThemedCSSProp = {
  // TODO: fix this any
  [key in string]?: any;
} & {
  theme: Theme;
};
