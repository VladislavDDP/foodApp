import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
    padding: 5,
  },
  qtyContainer: {
    position: 'absolute',
    right: 0,
    borderRadius: 50,
    backgroundColor: 'red',
    paddingHorizontal: 5,
  },
  qtyText: {
    color: '#fff',
    textAlign: 'center',
  },
});
