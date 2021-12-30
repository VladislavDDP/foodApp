import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  informationContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
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
  infoContacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    textAlignVertical: 'top',
    padding: 0,
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 18,
    borderBottomWidth: 1,
  },
  emailText: {
    marginVertical: 5,
    color: '#999',
    fontSize: 13,
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    padding: 0,
  },
  nameEmailContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  addressText: {
    color: '#999',
    fontSize: 13,
    borderBottomWidth: 1,
    padding: 0,
  },
});
