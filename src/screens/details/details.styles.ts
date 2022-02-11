import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
const extra = 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
  foodTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  slider: {
    flex: 4,
    shadowColor: '#999',
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowOffset: {width: 0, height: 0},
  },
  content: {
    marginHorizontal: 40,
  },
  bg: {
    position: 'absolute',
    width,
    height: height * extra,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    transform: [{translateY: 100}],
    marginTop: 50,
    paddingBottom: 200,
  },
});
