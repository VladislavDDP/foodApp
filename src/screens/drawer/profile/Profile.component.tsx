import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
            shouldSeparate={true}
            onSelect={() => setOption(PaymentType.Card)}
          />
          <RadioButton
            icon="bank"
            text={PaymentType.BankAccount}
            iconColor="violet"
            isSelected={profile.paymentOption === PaymentType.BankAccount}
            shouldSeparate={true}
            onSelect={() => setOption(PaymentType.BankAccount)}
          />
          <RadioButton
            icon="paypal"
            text={PaymentType.Paypal}
            iconColor="blue"
            isSelected={profile.paymentOption === PaymentType.Paypal}
            shouldSeparate={false}
            onSelect={() => setOption(PaymentType.Paypal)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
});
