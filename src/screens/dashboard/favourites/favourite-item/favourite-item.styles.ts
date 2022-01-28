import {StyleSheet} from 'react-native';

import {colors} from '../../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
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
});
