import {Platform, StyleSheet} from 'react-native';

const hMargin = 20;
const twice = 2;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Platform.select({ios: 0, android: 20}),
    marginHorizontal: hMargin * twice,
  },
  headerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
