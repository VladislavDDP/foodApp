import {StyleSheet} from 'react-native';

import {screenHeight} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: '#eee',
    paddingHorizontal: 30,
    paddingVertical: 50,
    width: '100%',
  },
  formContainer: {
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#FA4A0C',
  },
  label: {
    color: '#fff',
  },
});
