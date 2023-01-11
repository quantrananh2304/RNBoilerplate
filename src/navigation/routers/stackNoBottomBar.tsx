import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenOption } from '../configs/routerStyles';
import { Screen } from '~/types/navigation';
import { SettingScreen, UserProfile } from '~/screens';
import { BackNav } from '~/components';

const Stack = createNativeStackNavigator();

export default function StackNoBottomBar() {
  return (
    <Stack.Navigator screenOptions={screenOption as any}>
      <Stack.Screen
        name={Screen.Settings}
        component={SettingScreen}
        options={({ navigation }) => {
          return {
            title: 'Setting',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />
      <Stack.Screen
        name={Screen.UserProfile}
        component={UserProfile}
        options={({ navigation }) => {
          return {
            title: 'User Profile',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
