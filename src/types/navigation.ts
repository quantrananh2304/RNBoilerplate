import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum NavigatorScreen {
  Tab = 'TabNavigator',
  NoBottomBar = 'StackNoBottomBar',
}

export enum DrawerNavigatorScreen {
  Home = 'HomeDrawer',
  Counter = 'CounterDrawer',
}

export enum Screen {
  Home = 'Home',
  UserProfile = 'UserProfile',
  Settings = 'Settings',
  Counter = 'Counter',
}

type ScreenRouteProps = {
  [Screen.Settings]: undefined;
};

export type ScreenNavigationProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = ScreenRouteProps,
> = {
  navigation: NativeStackNavigationProp<ScreenProps, TScreen>;
};
