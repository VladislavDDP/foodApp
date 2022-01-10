import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  wrapper: {
    width: '60%',
    padding: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
});
