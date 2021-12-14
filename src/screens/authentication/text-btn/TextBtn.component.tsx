import React from 'react';
import {TouchableOpacity} from 'react-native';

import {DefaultStyledText} from '../../../components/app-text/AppText.component';
import {styles} from './forgot-passcode-btn.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const TextBtn: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <DefaultStyledText style={styles.passcodeLabel}>{props.title}</DefaultStyledText>
  </TouchableOpacity>
);
