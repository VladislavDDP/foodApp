import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
const extra = 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 0,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  flatlist: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 0,
  },
  bg: {
    position: 'absolute',
    width,
    height: height * extra,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: height}],
    marginTop: 50,
  },
});
