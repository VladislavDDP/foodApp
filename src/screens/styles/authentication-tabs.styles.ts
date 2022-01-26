import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  contentContainer: {
    height,
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  tabs: {
    justifyContent: 'space-around',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
  },
});
