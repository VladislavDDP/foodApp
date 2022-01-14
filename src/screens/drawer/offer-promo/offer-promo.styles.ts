import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const divider = 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width,
    height: height / divider,
  },
});
