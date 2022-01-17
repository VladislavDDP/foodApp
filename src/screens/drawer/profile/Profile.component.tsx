import {observer} from 'mobx-react';
import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {useStore} from '../../../store/store';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentType} from './paymentOption.types';
import {styles} from './profile.styles';

export const Profile = observer(() => {
  const {profile} = useStore();

  const setOption = (option: PaymentType) => profile.setPaymentMethod(option);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information</Text>
        <ContactInfo />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentContainer}>
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
        </View>
      </View>
    </SafeAreaView>
  );
});
