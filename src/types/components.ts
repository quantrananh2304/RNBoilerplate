import { LayoutChangeEvent, TextStyle, ViewStyle } from 'react-native';
import { ScreenNavigationProps } from './navigation';

export type TextColorType =
  | 'black'
  | 'error'
  | 'link'
  | 'white'
  | 'title'
  | 'body'
  | 'bodySecondary'
  | 'success'
  | 'orange'
  | 'dark'
  | 'radioBgDisabled'
  | 'main';
export type TextSizeType = 'tiny' | 'small' | 'default' | 'large' | 'larger'; // Normal is assumed no fontSize

export type TextBoldType = 'semiBold' | 'bold' | 'bolder'; // Normal is assumed no bold

export type TextPropType = {
  children: string | string[] | React.ReactNode[]; // Text can have some another Text component inside
  size?: TextSizeType;
  style?: TextStyle | TextStyle[]; // Allow styling of Text but prioritize own styles
  bold?: TextBoldType;
  color?: TextColorType;
  numberOfLines?: number;
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onTextLayout?: (event: any) => void;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  selectable?: boolean;
};

export type BackNavPropType = {
  style?: ViewStyle;
  onPress?: () => void;
} & ScreenNavigationProps;
