import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({ios: 'Verdana-Bold', android: 'sans-serif'}),
    fontWeight: '600',
  },
});
