import {Dimensions, Platform} from 'react-native';

const androidValue = 0.545;
const iosValue = 0.5;
const proportion = Platform.select({ios: iosValue, android: androidValue});
const {height, width} = Dimensions.get('window');

export const screenHeight = height * (proportion ? proportion : iosValue);
export const screenWidth = width;
