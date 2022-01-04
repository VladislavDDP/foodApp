import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: 0,
    position: 'relative',
  },
  contentContainer: {
    height,
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: '#eee',
    marginBottom: 0,
    marginTop: 30,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
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
