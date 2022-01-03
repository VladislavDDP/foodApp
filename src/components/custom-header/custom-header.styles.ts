import {StyleSheet} from 'react-native';

import {width} from '../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: width - 40,
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    zIndex: -1,
    color: '#000',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
