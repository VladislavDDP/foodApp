import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const divider = 3;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 40,
  },
  activityBox: {
    flex: 1,
  },
  separator: {
    marginVertical: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
