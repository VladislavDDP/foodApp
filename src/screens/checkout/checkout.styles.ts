import {StyleSheet} from 'react-native';
import {colors} from '../../vars/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  deliveryMethodContainer: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  button: {
    backgroundColor: colors.orange,
  },
  label: {
    color: colors.white,
  },
});
