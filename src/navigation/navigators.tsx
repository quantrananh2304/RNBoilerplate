import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigatorScreen } from '~/types/navigation';
import DrawerNavigator from './drawerNavigator';
import StackNoBottomBar from './routers/stackNoBottomBar';

const Stack = createNativeStackNavigator();

export default function Navigators() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NavigatorScreen.Tab} component={DrawerNavigator} />

        <Stack.Screen
          name={NavigatorScreen.NoBottomBar}
          component={StackNoBottomBar}
        />
      </Stack.Navigator>
    </>
  );
}
