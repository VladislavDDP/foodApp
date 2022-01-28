import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './empty-box.styles';

interface Props {
  icon: string;
  title: string;
  text: string;
}

export const EmptyBox: React.FC<Props> = props => (
  <View style={styles.container}>
    <Icon name={props.icon} color="#999" size={100} />
    <TextWrapper style={styles.title}>{props.title}</TextWrapper>
    <TextWrapper style={styles.text}>{props.text}</TextWrapper>
  </View>
);
