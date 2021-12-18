import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  wrapper: {
    marginHorizontal: 0,
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  flatlist: {
    marginLeft: 20,
    marginVertical: 10,
  },
  category: {
    marginHorizontal: 30,
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 40,
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
});
