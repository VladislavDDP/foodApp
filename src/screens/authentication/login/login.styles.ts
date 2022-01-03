import {Platform, StyleSheet} from 'react-native';

import {width} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'space-between',
  },
  formContainer: {
    marginHorizontal: 50,
    paddingVertical: Platform.select({android: 0, ios: 50}),
  },
  button: {
    backgroundColor: '#FA4A0C',
  },
  label: {
    color: '#fff',
  },
});
