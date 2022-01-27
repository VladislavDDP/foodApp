import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../vars/variables';

const {height, width} = Dimensions.get('window');
const extra = 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  bg: {
    position: 'absolute',
    width,
    height: height * extra,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 50,
    paddingBottom: 200,
  },
});
