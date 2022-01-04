import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../vars/variables';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width,
    height,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 20,
    paddingBottom: 120,
  },
});
