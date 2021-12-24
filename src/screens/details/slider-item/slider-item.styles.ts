import {StyleSheet} from 'react-native';

import {screenWidth} from '../../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 120,
  },
});
