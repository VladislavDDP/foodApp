import {StyleSheet} from 'react-native';

import {colors, height, width} from '../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 40,
    paddingTop: 20,
  },
  foodTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.orange,
    textAlign: 'center',
  },
  slider: {
    flex: 4,
    shadowColor: colors.light,
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 0},
  },
  content: {
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: colors.orange,
  },
  label: {
    color: colors.white,
  },
  bg: {
    position: 'absolute',
    width: width,
    height: height * 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 50,
    paddingBottom: 200,
  },
});
