import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 20,
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    right: 0,
    left: 0,
    marginHorizontal: 30,
    backgroundColor: '#FA4A0C',
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  invertedBackgroundColor: {
    backgroundColor: '#fff',
  },
  invertedTextColor: {
    color: '#FA4A0C',
  },
  disabled: {
    backgroundColor: '#999',
  },
});
