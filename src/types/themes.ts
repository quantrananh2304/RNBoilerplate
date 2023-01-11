type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
export type FontWeight = {
  bolder: FontWeightType;
  bold: FontWeightType;
  semiBold: FontWeightType;
  regular: FontWeightType;
  light: FontWeightType;
};

export type FontSize = {
  larger: number;
  large: number;
  default: number;
  small: number;
  smaller: number;
  maxFontSizeMultiplier: number;
};
