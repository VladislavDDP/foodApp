import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 15,
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
  itemDate: {
    color: '#666',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FF460A',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  totalPrice: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#FF460A',
    padding: 5,
    color: '#fff',
    fontWeight: '600',
  },
});
