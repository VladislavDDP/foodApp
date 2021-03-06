import {Observer, useLocalObservable} from 'mobx-react';
import React from 'react';
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
import {ProfileStore} from '../../../store/profileStore';

export const ProfileScreen = () => {
  const profile = useLocalObservable(() => new ProfileStore());

  const setCardOption = () => {
    profile.setPaymentMethod(PaymentType.Card);
  };

  const setBankAccountOption = () => {
    profile.setPaymentMethod(PaymentType.BankAccount);
  };

  const setPaypalOption = () => {
    profile.setPaymentMethod(PaymentType.Paypal);
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
                isSelected={profile.paymentOption === PaymentType.Card}
                shouldSeparate
                onSelect={setCardOption}
              />
              <RadioButton
                icon="bank"
                text={PaymentType.BankAccount}
                iconColor="violet"
                isSelected={profile.paymentOption === PaymentType.BankAccount}
                shouldSeparate
                onSelect={setBankAccountOption}
              />
              <RadioButton
                icon="paypal"
                text={PaymentType.Paypal}
                iconColor="blue"
                isSelected={profile.paymentOption === PaymentType.Paypal}
                onSelect={setPaypalOption}
              />
            </ViewTheme>
          </View>
        </SafeAreaTheme>
      )}
    </Observer>
  );
};
