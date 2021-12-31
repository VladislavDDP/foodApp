import {Dimensions, Platform} from 'react-native';

const androidValue = 0.56;
const iosValue = 0.5;
const proportion = Platform.select({ios: iosValue, android: androidValue});
const {height, width} = Dimensions.get('window');

export const screenHeight = height * (proportion ? proportion : iosValue);
export const screenWidth = width;

export enum colors {
  orange = '#FF460A',
  white = '#fff',
  dark = '#333',
  light = '#999',
  black = '#000',
  overlay = 'rgba(100, 100, 100, 0.4)',
}

export const animationVars = {
  start: 0,
  end: 1,
  minScale: 0.8,
  maxScale: 1,
  minRadius: 0,
  maxRadius: 20,
};
