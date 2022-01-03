import {StyleSheet} from 'react-native';

import {colors} from '../../../vars/variables';

export const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.light,
    marginVertical: 10,
  },
  addressContainer: {
    marginVertical: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  customerName: {
    fontSize: 17,
    fontWeight: '700',
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
