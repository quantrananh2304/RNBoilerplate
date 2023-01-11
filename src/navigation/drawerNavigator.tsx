import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from '~/components';
import { Metrics } from '~/themes';
import { DrawerNavigatorScreen } from '~/types/navigation';
import StackHome from './routers/stackHome';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerNavigatorScreen.Home}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: Metrics.screenWidth * 0.8,
          marginRight: 0,
          paddingRight: 0,
        },
        swipeEdgeWidth: 0,
      }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen
        name={DrawerNavigatorScreen.Home}
        component={StackHome}
        options={{
          drawerLabel: 'Main Screen',
        }}
      />
    </Drawer.Navigator>
  );
}
