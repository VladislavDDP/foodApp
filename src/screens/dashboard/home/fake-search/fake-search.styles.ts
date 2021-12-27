import {StyleSheet} from 'react-native';

import {colors} from '../../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: colors.overlay,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});
