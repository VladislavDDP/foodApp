import {StyleSheet} from 'react-native';

import {colors} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemDescription: {
    flexDirection: 'column',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.orange,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  qtyNumber: {
    color: colors.white,
    fontSize: 15,
    width: 20,
    textAlign: 'center',
  },
});
