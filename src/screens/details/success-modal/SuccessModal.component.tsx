import React from 'react';
import {Text, View} from 'react-native';

import {SubmitButton} from '../../../components/submit-button/SubmitButton.component';
import {styles} from './success-modal.styles';

interface Props {
  title: string;
  btnText: string;
  onPress: () => void;
}

export const SuccessModal: React.FC<Props> = ({title, btnText, onPress}) => (
  <View style={styles.modalContainer}>
    <View style={styles.wrapper}>
      <Text style={styles.modalText}>{title}</Text>
      <SubmitButton title={btnText} onPress={onPress} />
    </View>
  </View>
);
