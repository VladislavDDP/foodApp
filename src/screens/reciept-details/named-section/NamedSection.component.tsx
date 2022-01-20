import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './named-section.styles';

interface Props {
  sectionTitle: string;
  sectionDetails: string;
}

export const NamedSection: React.FC<Props> = ({sectionTitle, sectionDetails}) => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>{sectionTitle}:</Text>
    <Text style={styles.sectionDetails}>{sectionDetails}</Text>
  </View>
);
