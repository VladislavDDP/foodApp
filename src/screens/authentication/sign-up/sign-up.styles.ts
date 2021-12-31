import {StyleSheet} from 'react-native';

import {screenHeight, screenWidth} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: '#eee',
    paddingHorizontal: 30,
    paddingTop: 20,
    width: screenWidth,
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
