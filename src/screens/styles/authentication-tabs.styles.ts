import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: -50,
  },
  keyboardContainer: {
    flex: 1,
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: '#eee',
    marginBottom: 15,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
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
