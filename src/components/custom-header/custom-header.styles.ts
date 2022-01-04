import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const doubledMargin = 40;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  headerContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: width - doubledMargin,
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    zIndex: -1,
    color: '#000',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
