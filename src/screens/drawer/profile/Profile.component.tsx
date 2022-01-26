import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {useStore} from '../../../store/store';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentType} from '../../../model/PaymentType';
import {styles} from './profile.styles';
import {useTheme} from '../../../theme/theme';

export const Profile = observer(() => {
  const {theme} = useTheme();
  const {profile} = useStore();

  useEffect(() => {
    profile.getUserData();
  }, []);

  const setOption = (option: PaymentType) => profile.setPaymentMethod(option);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colorScheme.primaryBackgroundLight}]}>
      <Text style={[styles.title, {color: theme.colorScheme.primaryText}]}>Profile</Text>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, {color: theme.colorScheme.primaryText}]}>Information</Text>
        <ContactInfo />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, {color: theme.colorScheme.primaryText}]}>Payment Method</Text>
        <View style={[styles.paymentContainer, {backgroundColor: theme.colorScheme.primaryBackgroundDark}]}>
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
