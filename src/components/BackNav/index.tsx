import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BackNavPropType } from '~/types/components';

function BackNav({ style, navigation, onPress }: BackNavPropType) {
  function handlePress() {
    if (!onPress) {
      return navigation.goBack();
    }

    onPress();
    return undefined;
  }

  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      <Icon name="arrow-back-ios" color="#7385A8" size={25} />
    </TouchableOpacity>
  );
}

export default BackNav;
