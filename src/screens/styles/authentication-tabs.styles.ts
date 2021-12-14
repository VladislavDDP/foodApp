import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  animatedContainer: {
    flex: 2,
    backgroundColor: '#eee',
    height: '30%',
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
  },
  header: {
    flex: 2,
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
