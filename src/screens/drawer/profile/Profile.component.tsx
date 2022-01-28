import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {View} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {useStore} from '../../../store/store';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentType} from '../../../model/PaymentType';
import {styles} from './profile.styles';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';

export const Profile = observer(() => {
  const {profile} = useStore();

  useEffect(() => {
    profile.getUserData();
  }, []);

  const setOption = (option: PaymentType) => profile.setPaymentMethod(option);

  return (
    <SafeAreaTheme style={styles.container}>
      <TextWrapper style={styles.title}>Profile</TextWrapper>
      <View style={styles.section}>
        <TextWrapper style={styles.sectionTitle}>Information</TextWrapper>
        <ContactInfo />
      </View>
      <View style={styles.section}>
        <TextWrapper style={styles.sectionTitle}>Payment Method</TextWrapper>
        <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.paymentContainer}>
          <RadioButton
            icon="credit-card"
            text={PaymentType.Card}
            iconColor="orange"
            isSelected={profile.paymentOption === PaymentType.Card}
            shouldSeparate
            onSelect={() => setOption(PaymentType.Card)}
          />
          <RadioButton
            icon="bank"
            text={PaymentType.BankAccount}
            iconColor="violet"
            isSelected={profile.paymentOption === PaymentType.BankAccount}
            shouldSeparate
            onSelect={() => setOption(PaymentType.BankAccount)}
          />
          <RadioButton
            icon="paypal"
            text={PaymentType.Paypal}
            iconColor="blue"
            isSelected={profile.paymentOption === PaymentType.Paypal}
            onSelect={() => setOption(PaymentType.Paypal)}
          />
        </ViewTheme>
      </View>
    </SafeAreaTheme>
  );
});
