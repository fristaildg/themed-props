export type Scale =
  | 'colors'
  | 'space'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'shadows'
  | 'fonts'
  | 'sizes'
  | 'breakpoints'
  | 'borders'
  | 'radii';

export type Theme = {
  name: string;
} & {
  [K in string]: any;
};

export type ColorProps = {
  $backgroundColor?: string;
  $color?: string;
};

export type SpaceProps = {
  [K in
    | '$gap'
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
    | '$paddingX']?: string | number | unknown[];
};

export type TypographyProps = {
  [K in
    | '$fontStyle'
    | '$textAlign'
    | '$fontSize'
    | '$fontWeight'
    | '$lineHeight'
    | '$letterSpacing'
    | '$fontFamily']?: string | number | unknown[];
};

export type LayoutProps = {
  [K in
    | '$display'
    | '$verticalAlign'
    | '$overflow'
    | '$overflowX'
    | '$overflowY'
    | '$width'
    | '$height'
    | '$maxWidth'
    | '$maxHeight'
    | '$minWidth'
    | '$minHeight'
    | '$size']?: string | number | unknown[];
};

export type PositionProps = {
  [K in '$top' | '$right' | '$bottom' | '$left' | '$position' | '$zIndex']?:
    | string
    | number
    | unknown[];
};

export type ShadowProps = {
  $boxShadow?: string | number | unknown[];
  $textShadow?: string | number | unknown[];
};

export type FlexboxProps = {
  [K in
    | '$alignItems'
    | '$alignContent'
    | '$justifyItems'
    | '$justifyContent'
    | '$flexWrap'
    | '$flexDirection'
    | '$flex'
    | '$flexGrow'
    | '$flexShrink'
    | '$flexBasis'
    | '$justifySelf'
    | '$alignSelf'
    | '$order']?: string | number | unknown[];
};

export type GridProps = {
  [K in
    | '$gridGap'
    | '$gridRowGap'
    | '$gridColumnGap'
    | '$gridColumn'
    | '$gridRow'
    | '$gridArea'
    | '$gridAutoFlow'
    | '$gridAutoRows'
    | '$gridAutoColumns'
    | '$gridTemplateRows'
    | '$gridTemplateColumns'
    | '$gridTemplateAreas']?: string | number | unknown[];
};

export type BackgroundProps = {
  [K in
    | '$background'
    | '$backgroundImage'
    | '$backgroundSize'
    | '$backgroundPosition'
    | '$backgroundRepeat']?: string | number | unknown[];
};

export type BorderProps = {
  [K in
    | '$border'
    | '$borderTop'
    | '$borderRight'
    | '$borderBottom'
    | '$borderLeft'
    | '$borderColor'
    | '$borderTopColor'
    | '$borderRightColor'
    | '$borderBottomColor'
    | '$borderLeftColor'
    | '$borderRadius'
    | '$borderTopLeftRadius'
    | '$borderTopRightRadius'
    | '$borderBottomLeftRadius'
    | '$borderBottomRightRadius'
    | '$borderWidth'
    | '$borderStyle'
    | '$borderTopWidth'
    | '$borderTopStyle'
    | '$borderRightWidth'
    | '$borderRightStyle'
    | '$borderBottomWidth'
    | '$borderBottomStyle'
    | '$borderLeftWidth'
    | '$borderLeftStyle']?: string | number | unknown[];
};

export type ThemedCSSProp = {
  // TODO: fix this any
  [key in string]?: any;
} & {
  theme: Theme;
};
