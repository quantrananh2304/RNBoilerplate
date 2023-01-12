import React from 'react';
import { Text as TextNative } from 'react-native';
import styles from './styles';
import { Fonts } from '~/themes';
import { TextPropType } from '~/types/components';

// NOTE: Avoid styling component if possible expect with layout styles!
// High level component for all text in the app which gives it the same styling
export default function Text(props: TextPropType) {
  const {
    children,
    size,
    style,
    bold,
    numberOfLines,
    onPress,
    onLayout,
    onTextLayout,
    adjustsFontSizeToFit,
    color,
    allowFontScaling,
    maxFontSizeMultiplier,
    ellipsizeMode,
    selectable,
  } = props;

  return (
    <TextNative
      style={[
        styles.text,
        bold ? styles[bold] : null,
        size ? styles[size] : null,
        color ? styles[color] : null,
        style,
      ]}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      numberOfLines={numberOfLines}
      onPress={onPress}
      onLayout={onLayout}
      ellipsizeMode={ellipsizeMode}
      // @ts-ignore
      onTextLayout={onTextLayout}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      selectable={selectable}
    >
      {children}
    </TextNative>
  );
}

Text.defaultProps = {
  maxFontSizeMultiplier: Fonts.size.maxFontSizeMultiplier,
};
