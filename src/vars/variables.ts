import {Dimensions, Platform} from 'react-native';

const androidValue = 0.575;
const iosValue = 0.5;
const proportion = Platform.select({ios: iosValue, android: androidValue});

export const screenHeight = Dimensions.get('window').height * (proportion ? proportion : iosValue);
export const screenWidth = Dimensions.get('window').width;
