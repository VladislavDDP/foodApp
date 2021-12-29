import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './section.styles';

interface Props {
  title: string;
  description: string;
}

export const Section: React.FC<Props> = ({title, description}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionText}>{description}</Text>
  </View>
);
