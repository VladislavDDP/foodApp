import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderColor: '#999',
    borderWidth: 2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRadio: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  line: {
    height: 1,
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: '#999',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 15,
  },
  icon: {
    color: '#fff',
  },
});
