import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {useTheme} from '../../../theme/theme';
import {styles} from './modal-checkout.styles';
import {ModalButton} from './ModalButton.component';

interface Props {
  approvePayment: () => void;
  setVisable: (value: boolean) => void;
}

export const ModalCheckout: React.FC<Props> = ({approvePayment, setVisable}) => {
  const {theme} = useTheme();

  const setUnvisable = () => setVisable(false);

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, {backgroundColor: theme.colorScheme.primaryDark}]}>
        <View style={styles.modalTitle}>
          <TextWrapper style={styles.titleText}>Please note</TextWrapper>
        </View>
        <View style={styles.infoContainer}>
          <TextWrapper>Delivery to Mainland</TextWrapper>
          <TextWrapper style={styles.infoText}>N1000 - N2000</TextWrapper>
          <View style={styles.separator} />
          <TextWrapper>Delivery to island</TextWrapper>
          <TextWrapper style={styles.infoText}>N2000 - N3000</TextWrapper>
        </View>
        <View style={styles.controlButtons}>
          <ModalButton text="Cancel" onPress={setUnvisable} style={[styles.btnText, styles.leftBtn]} />
          <ModalButton text="Proceed" onPress={approvePayment} style={[styles.btnText, styles.rightBtn]} />
        </View>
      </View>
    </View>
  );
};
