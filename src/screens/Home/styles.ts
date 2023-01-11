import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '~/themes';

export const WIDTH_SCROLL_VIEW = Metrics.screenWidth - 32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  background: {
    width: '100%',
    aspectRatio: 1.157,
    position: 'absolute',
  },
  scrollView: {
    paddingHorizontal: Metrics.marginHorizontal,
  },
  primaryBtn: {
    marginBottom: Metrics.doubleBaseMargin,
    ...ApplicationStyles.shadowBox,
  },
  carouselSmall: {
    width: WIDTH_SCROLL_VIEW,
    height: 120,
    backgroundColor: Colors.primary,
    borderRadius: Metrics.mediumMargin,
    marginTop: Metrics.baseMargin,
  },
  imgInsurance: {
    width: Metrics.screenWidth - 32,
    aspectRatio: 2.76,
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
