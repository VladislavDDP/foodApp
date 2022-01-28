import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

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
  redline: {
    borderBottomColor: 'red',
  },
  input: {
    height: 40,
    fontWeight: '600',
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 10,
  },
});
