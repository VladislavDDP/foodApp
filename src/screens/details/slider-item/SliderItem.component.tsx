import React from 'react';
import {Image, View} from 'react-native';

import {styles} from './slider-item.styles';

interface Props {
  imageUrl: string;
}

export const SliderItem: React.FC<Props> = ({imageUrl}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: imageUrl}} />
  </View>
);
