import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: width,
    paddingTop: 10,
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
