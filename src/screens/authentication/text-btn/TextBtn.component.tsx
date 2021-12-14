import React from 'react';
import {TouchableOpacity} from 'react-native';

import {AppText} from '../../../components/app-text/AppText.component';
import {styles} from './forgot-passcode-btn.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const TextBtn: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <AppText children={props.title} style={styles.passcodeLabel} />
  </TouchableOpacity>
);
