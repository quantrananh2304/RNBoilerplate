import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOption } from '../configs/routerStyles';
import { Screen } from '~/types/navigation';
import { HomeScreen, SettingScreen } from '~/screens';
import { BackNav } from '~/components';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={screenOption as any}>
      <Stack.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home Page",
          headerShown: true,
          headerLeft: () => {

            function handleOpenDrawer() {
              navigation.openDrawer();
            }

            return (
              <Button title='Left' onPress={handleOpenDrawer} />
            )
          }
        })}
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
