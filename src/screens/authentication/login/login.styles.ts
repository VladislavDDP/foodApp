import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: width,
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
