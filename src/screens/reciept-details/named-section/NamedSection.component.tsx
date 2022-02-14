import React from 'react';
import {Text, View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {useTheme} from '../../../theme/theme';
import {styles} from './named-section.styles';

interface Props {
  sectionTitle: string;
  sectionDetails: string;
}

export const NamedSection: React.FC<Props> = ({sectionTitle, sectionDetails}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <TextWrapper style={styles.sectionTitle}>{sectionTitle}:</TextWrapper>
      <Text style={[styles.sectionDetails, {color: theme.colorScheme.accent}]}>{sectionDetails}</Text>
    </View>
  );
};
