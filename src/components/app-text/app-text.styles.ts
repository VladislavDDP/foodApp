import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Verdana-Bold',
    fontWeight: '600',
  },
});
