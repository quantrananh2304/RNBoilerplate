/** @format */

import Colors from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const TAB_BAR_HEIGHT = 50;
const NAV_BAR_HEIGHT = 56;

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.grey.lightest,
    },
    mainContainerSafeAreaAddon: {
      backgroundColor: Colors.white,
    },
    alignCenterScreen: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: Metrics.baseMargin,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      // fontSize: Fonts.size.medium,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.white,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.white,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
  },
  input: {
    innerStyle: {
      borderColor: Colors.inputBorder,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.weight.bolder,
    color: Colors.white,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarNavigation: {
    height: TAB_BAR_HEIGHT,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
  },
  appBackground: {
    backgroundColor: Colors.grey.lightest,
    flex: 1,
  },
  footer: {
    color: Colors.black,
    marginTop: 8,
  },
  itemContainerApprove: {
    padding: 16,
    paddingBottom: 24,
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 6,
    backgroundColor: Colors.white,
    shadowColor: Colors.translucentBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 15,
    elevation: 4,
  },
  listContainerApprove: {
    width: Metrics.screenWidth,
  },
  containerApprove: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  shadowPopup: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowBox: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },
  iconDefaultSize: {
    width: 24,
    height: 24,
  },
  iconSize: {
    small: {
      width: 16,
      height: 16,
    },
    default: {
      width: 24,
      height: 24,
    },
    large: {
      width: 40,
      height: 40,
    },
  },
  block: {
    marginTop: Metrics.mediumMargin,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.white,
  },
  blockContainer: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.white,
  },
};

export default ApplicationStyles;
