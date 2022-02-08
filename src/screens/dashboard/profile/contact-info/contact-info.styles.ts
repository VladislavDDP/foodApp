import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  informationContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  infoText: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 10,
  },
  activeTextInput: {
    backgroundColor: 'rgba(100, 100, 100, 0.2)',
  },
  infoContacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    textAlignVertical: 'top',
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 18,
  },
  emailText: {
    marginVertical: 5,
    color: '#999',
    fontSize: 13,
    textAlignVertical: 'center',
  },
  nameEmailContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  addressText: {
    color: '#999',
    fontSize: 13,
  },
});
