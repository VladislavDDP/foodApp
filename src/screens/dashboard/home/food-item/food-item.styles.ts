import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  image: {
    position: 'relative',
    top: -20,
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  decriptionContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    width: 120,
    fontSize: 22,
    fontWeight: '600',
  },
  itemPrice: {
    color: '#FA4A0C',
    fontSize: 17,
    fontWeight: '700',
  },
});
