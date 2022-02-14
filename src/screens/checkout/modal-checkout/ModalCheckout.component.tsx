import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../../localization/localization';
import {useTheme} from '../../../theme/theme';
import {styles} from './modal-checkout.styles';
import {ModalButton} from './modal-button/ModalButton.component';

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
          <TextWrapper style={styles.titleText}>{localisation.t('checkoutModalTitle')}</TextWrapper>
        </View>
        <View style={styles.infoContainer}>
          <TextWrapper>{localisation.t('checkoutModalMainland')}</TextWrapper>
          <TextWrapper style={styles.infoText}>N1000 - N2000</TextWrapper>
          <View style={styles.separator} />
          <TextWrapper>{localisation.t('checkoutModalIsland')}</TextWrapper>
          <TextWrapper style={styles.infoText}>N2000 - N3000</TextWrapper>
        </View>
        <View style={styles.controlButtons}>
          <ModalButton text={localisation.t('buttons.cancelOrder')} onPress={setUnvisable} textStyle={styles.leftBtnText} />
          <ModalButton
            text={localisation.t('buttons.confirmOrder')}
            onPress={approvePayment}
            style={[{backgroundColor: theme.colorScheme.accent}, styles.rightBtn]}
            textStyle={styles.rightBtnText}
          />
        </View>
      </View>
    </View>
  );
};
