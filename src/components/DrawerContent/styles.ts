import { StyleSheet } from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '~/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  background: {
    width: '100%',
    height: 150,
    zIndex: -1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    marginTop: -17,
  },
  headerInfo: {
    paddingTop: 24,
    flex: 1,
    marginLeft: Metrics.mediumMargin,
  },
  headerName: {
    marginBottom: 2,
  },
  headerStatus: {},
  row: {
    marginHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  rowText: {
    flex: 1,
    marginLeft: Metrics.baseMargin,
  },
  badge: {
    backgroundColor: '#F37070',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 20,
  },
  iconAvatar: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginRight: Metrics.mediumMargin,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderColor: Colors.primary,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    justifyContent: 'flex-end',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    flex: 1,
  },
  footerIcon: {
    marginRight: Metrics.baseMargin,
    ...ApplicationStyles.iconSize.default,
  },
});
