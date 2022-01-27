import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activityIndicatorContainer: {
    left: 0,
    top: 0,
    backgroundColor: '#999',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  loadingText: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 25,
  },
});
