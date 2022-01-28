import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {styles} from './section.styles';

interface Props {
  title: string;
  description: string;
}

export const Section: React.FC<Props> = ({title, description}) => (
  <View style={styles.section}>
    <TextWrapper style={styles.sectionTitle}>{title}</TextWrapper>
    <TextWrapper style={styles.sectionText}>{description}</TextWrapper>
  </View>
);
