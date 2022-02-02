import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'space-between',
  },
  formContainer: {
    paddingHorizontal: 50,
    marginVertical: 30,
    marginBottom: 60,
  },
});
