/** @format */

import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const screenRatio = height / width;
const hastNotch = DeviceInfo.hasNotch();
const isIOS = Platform.OS === 'ios';

const Metrics = {
  marginDefault: 12,
  marginHorizontal: 16,
  marginVertical: 16,
  marginBottom: 30,
  marginBottomHasNotch: hastNotch ? 30 : 16,
  baseMargin: 16,
  mediumBaseMargin: 20,
  doubleBaseMargin: 32,
  largeBaseMargin: 24,
  mediumMargin: 8,
  smallMargin: 4,
  horizontalLineHeight: 1,
  bottomTabHeight: 45,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: isIOS ? 64 : 54,
  isIOS,
  ratioH: height / 812,
  ratioW: width / 375,
  screenRatio,
  scaleFactor: screenRatio < 1.8 ? 0.75 : 1,
  buttonRadius: 30,
  icon: {
    size: {
      width: 24,
      height: 24,
    },
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
    logoSmall: 180,
    logoRadiusSmall: 90,
    logoRadius: 100,
    logo1: 120,
  },
  hastNotch,
};

export default Metrics;
