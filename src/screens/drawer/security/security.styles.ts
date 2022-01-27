import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const divider = 3;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginRight: 10,
    fontWeight: '700',
  },
  image: {
    width,
    height: height / divider,
  },
});
