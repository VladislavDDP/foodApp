import {Observer, useLocalObservable} from 'mobx-react';
import React, {useState} from 'react';
import {View} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentType} from '../../../model/PaymentType';
import {styles} from './profile.styles';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {localisation} from '../../../localization/localization';
import {Profile} from '../../../store/profile';

export const ProfileScreen = () => {
  const profile = useLocalObservable(() => new Profile());
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(profile.paymentMethod);

  const setOption = (option: string) => {
    profile.setPaymentMethod(option as PaymentType);
    setPaymentMethod(option as PaymentType);
  };

  return (
    <Observer>
      {() => (
        <SafeAreaTheme style={styles.container}>
          <TextWrapper style={styles.title}>{localisation.t('profileTitle')}</TextWrapper>
          <View style={styles.section}>
            <TextWrapper style={styles.sectionTitle}>{localisation.t('profileInformationTitle')}</TextWrapper>
            <ContactInfo />
          </View>
          <View style={styles.section}>
            <TextWrapper style={styles.sectionTitle}>{localisation.t('profilePaymentMethodTitle')}</TextWrapper>
            <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.paymentContainer}>
              <RadioButton
                icon="credit-card"
                text={PaymentType.Card}
                iconColor="orange"
                isSelected={paymentMethod === PaymentType.Card}
                shouldSeparate
                onSelect={setOption}
              />
              <RadioButton
                icon="bank"
                text={PaymentType.BankAccount}
                iconColor="violet"
                isSelected={paymentMethod === PaymentType.BankAccount}
                shouldSeparate
                onSelect={setOption}
              />
              <RadioButton
                icon="paypal"
                text={PaymentType.Paypal}
                iconColor="blue"
                isSelected={paymentMethod === PaymentType.Paypal}
                onSelect={setOption}
              />
            </ViewTheme>
          </View>
        </SafeAreaTheme>
      )}
    </Observer>
  );
};
