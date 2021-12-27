import {StyleSheet} from 'react-native';

import {colors, screenHeight, screenWidth} from '../../vars/variables';

export const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight * 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 20,
    paddingBottom: 200,
  },
});
