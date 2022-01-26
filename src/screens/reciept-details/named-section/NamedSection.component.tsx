import React from 'react';
import {Text, View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {styles} from './named-section.styles';

interface Props {
  sectionTitle: string;
  sectionDetails: string;
}

export const NamedSection: React.FC<Props> = ({sectionTitle, sectionDetails}) => (
  <View style={styles.container}>
    <TextWrapper style={styles.sectionTitle}>{sectionTitle}:</TextWrapper>
    <Text style={styles.sectionDetails}>{sectionDetails}</Text>
  </View>
);
