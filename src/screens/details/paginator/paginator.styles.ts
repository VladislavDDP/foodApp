import {StyleSheet} from 'react-native';

import {colors} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 10,
    width: 10,
    margin: 10,
    borderRadius: 50,
    backgroundColor: colors.orange,
  },
});
