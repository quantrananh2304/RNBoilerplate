import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOption } from '../configs/routerStyles';
import { Screen } from '~/types/navigation';
import { HomeScreen, SettingScreen } from '~/screens';
import { BackNav } from '~/components';

const Stack = createNativeStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={screenOption as any}>
      <Stack.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Screen.Settings}
        component={SettingScreen}
        options={({ navigation }) => {
          return {
            title: '',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
