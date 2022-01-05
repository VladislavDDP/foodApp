import {StyleSheet} from 'react-native';

import {colors} from '../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    marginHorizontal: 50,
    marginTop: 15,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    padding: 10,
  },
});
