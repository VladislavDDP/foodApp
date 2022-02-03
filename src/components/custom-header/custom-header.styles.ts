import {StyleSheet} from 'react-native';

const hMargin = 20;
const twice = 2;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: hMargin * twice,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
