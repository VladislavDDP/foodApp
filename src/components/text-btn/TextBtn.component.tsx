import React from 'react';
import {TouchableOpacity} from 'react-native';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './forgot-passcode-btn.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const TextButton: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <TextWrapper style={styles.passcodeLabel}>{props.title}</TextWrapper>
  </TouchableOpacity>
);
