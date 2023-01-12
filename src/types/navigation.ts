import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum NavigatorScreen {
  Tab = 'TabNavigator',
  NoBottomBar = 'StackNoBottomBar',
}

export enum DrawerNavigatorScreen {
  Home = 'HomeDrawer',
}

export enum Screen {
  Home = 'Home',
  UserProfile = 'UserProfile',
  Settings = 'Settings',
  Counter = 'Counter',
  FakeStoreApi = 'FakeStoreApi',
  FakeStoreApi_Products = 'FakeStoreApi_Products',
  FakeStoreApi_AddProduct = 'FakeStoreApi_AddProduct',
}

type ScreenRouteProps = {
  [Screen.Settings]: undefined;
  [Screen.FakeStoreApi_AddProduct]: undefined;
  [Screen.FakeStoreApi_Products]: { category: string };
};

export type ScreenNavigationProps<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = ScreenRouteProps,
> = {
  navigation: NativeStackNavigationProp<ScreenProps, TScreen>;
};

export type ScreenPropsWithRoute<
  TScreen extends keyof ScreenProps = any,
  ScreenProps extends ParamListBase = ScreenRouteProps,
> = {
  route: RouteProp<ScreenProps, TScreen>;
};
