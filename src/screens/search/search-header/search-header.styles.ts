import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width,
    height: 150,
    position: 'absolute',
    zIndex: 1,
  },
  textInput: {
    marginLeft: 40,
  },
});
