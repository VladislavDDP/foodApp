import {StyleSheet} from 'react-native';

import {width} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 120,
  },
});
