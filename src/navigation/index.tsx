import { NavigationContainer } from '@react-navigation/native';
import React, { createRef } from 'react';
import Navigators from './navigators';
import { StatusBar } from 'react-native';
import { Colors } from '~/themes';

export const refNavigator = createRef<any>();

export default function RootNavigator() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <NavigationContainer ref={refNavigator}>
        <Navigators />
      </NavigationContainer>
    </>
  );
}
