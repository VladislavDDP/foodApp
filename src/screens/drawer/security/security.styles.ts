import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const divider = 3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
  },
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
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
