import React from 'react';
import {SafeAreaView} from 'react-native';

import {IconTypes} from '../icon-button/icon-types';
import {IconButton} from '../icon-button/IconButton.component';
import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './custom-header.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomHeader: React.FC<Props> = ({title, onPress}) => (
  <SafeAreaView style={styles.container}>
    <IconButton name="chevron-left" size={18} iconType={IconTypes.FontAwesome5Icon} onPress={onPress} />
    <TextWrapper style={styles.title}>{title}</TextWrapper>
    <IconButton name="chevron-left" size={18} color="transparent" onPress={onPress} />
  </SafeAreaView>
);
