import {Dimensions, Platform, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: '#FF470B',
    paddingTop: Platform.select({android: 20, ios: 50}),
    paddingBottom: 0,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#FF460A',
  },
  title: {
    zIndex: 100,
    color: '#fff',
    fontSize: 50,
    fontWeight: '900',
  },
});
