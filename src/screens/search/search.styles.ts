import {StyleSheet} from 'react-native';

import {colors, height, width} from '../../vars/variables';

export const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 20,
    paddingBottom: 120,
  },
});
