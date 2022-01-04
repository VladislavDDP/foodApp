import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imagesWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  womenImg: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  menImg: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
  redBluredBox: {
    flex: 1,
    height: 180,
    borderRadius: 0,
    top: 10,
    zIndex: 3,
    opacity: 1,
  },
});
