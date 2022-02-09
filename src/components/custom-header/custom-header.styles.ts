import {StyleSheet} from 'react-native';

const hMargin = 40;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: hMargin,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hMargin,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
