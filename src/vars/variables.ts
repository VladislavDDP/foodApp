import {Dimensions, Platform} from 'react-native';

const androidValue = 0.575;
const iosValue = 0.5;
const proportion = Platform.OS === 'android' ? androidValue : iosValue;

export const height = Dimensions.get('window').height * proportion;
