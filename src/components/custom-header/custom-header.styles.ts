import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const hMargin = 20;
const twice = 2;
const containerWidth = width - hMargin * twice;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: hMargin,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: containerWidth,
    alignItems: 'center',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
