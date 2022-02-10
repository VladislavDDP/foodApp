import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#FF460A',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF460A',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  qtyNumber: {
    color: '#fff',
    fontSize: 15,
    width: 20,
    textAlign: 'center',
  },
  qtyController: {
    paddingHorizontal: 5,
  },
});
