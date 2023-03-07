import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenOption } from '../configs/routerStyles';
import { Screen, ScreenRouteProps } from '~/types/navigation';
import {
  SettingScreen,
  UserProfile,
  FakeStoreApiScreen,
  AddProduct,
  Products,
} from '~/screens';
import { BackNav } from '~/components';

const Stack = createNativeStackNavigator<ScreenRouteProps>();

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

      <Stack.Screen
        name={Screen.FakeStoreApi}
        component={FakeStoreApiScreen}
        options={({ navigation }) => {
          return {
            title: 'Fake Store Api',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />

      <Stack.Screen
        name={Screen.FakeStoreApi_AddProduct}
        component={AddProduct}
        options={({ navigation }) => {
          return {
            title: 'Add Product',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />

      <Stack.Screen
        name={Screen.FakeStoreApi_Products}
        component={Products}
        options={({ navigation }) => {
          return {
            title: 'Products',
            headerLeft: () => {
              return <BackNav navigation={navigation} />;
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
