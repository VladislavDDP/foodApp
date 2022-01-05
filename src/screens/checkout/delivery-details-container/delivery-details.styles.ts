import {StyleSheet} from 'react-native';

import {colors} from '../../../vars/variables';

export const styles = StyleSheet.create({
  addressContainer: {
    marginVertical: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  addressTextContainer: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
});
