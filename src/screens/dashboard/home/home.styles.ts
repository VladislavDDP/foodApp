import {StyleSheet} from 'react-native';

import {colors, screenHeight, screenWidth} from '../../../vars/variables';

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
    width: screenWidth,
    height: screenHeight * 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: screenHeight}],
    marginTop: 50,
  },
});
