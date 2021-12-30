import {StyleSheet} from 'react-native';

import {screenHeight} from '../../../vars/variables';

const screenDivider = 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: screenHeight / screenDivider,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 30,
  },
  text: {
    color: '#999',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
  },
});
