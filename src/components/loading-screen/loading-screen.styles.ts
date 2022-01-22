import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  activityIndicatorBox: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(255, 107, 48, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 25,
    color: '#fff',
  },
});
