import {StyleSheet} from 'react-native';

import {colors} from '../../../vars/variables';

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
    backgroundColor: 'white',
    paddingBottom: 15,
  },
  modalTitle: {
    backgroundColor: colors.overlay,
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
    backgroundColor: colors.light,
    marginVertical: 20,
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '600',
  },
  leftBtn: {
    color: colors.light,
  },
  rightBtn: {
    backgroundColor: colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    color: colors.white,
  },
});
