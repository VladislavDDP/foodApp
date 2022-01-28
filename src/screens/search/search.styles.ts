import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sharedElement: {
    zIndex: 0,
  },
  bg: {
    position: 'absolute',
    width,
    height,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 20,
    paddingBottom: 120,
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});
