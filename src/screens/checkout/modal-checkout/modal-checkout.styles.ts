import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(100, 100, 100, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  wrapper: {
    width: '100%',
    borderRadius: 20,
    paddingBottom: 15,
  },
  modalTitle: {
    backgroundColor: 'rgba(100, 100, 100, 0.4)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 40,
  },
  infoContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  infoText: {
    fontSize: 17,
  },
  separator: {
    height: 1,
    backgroundColor: '#999',
    marginVertical: 20,
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  leftBtnText: {
    color: '#999',
  },
  rightBtn: {
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  rightBtnText: {
    color: '#fff',
  },
});
