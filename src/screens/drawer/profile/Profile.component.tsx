import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentOption, paymentOptions} from './payment.types';
import {styles} from './profile.styles';

const defaultSelectedOption = 1;

export const Profile = () => {
  const [paymentOption, setPaymentOption] = useState(defaultSelectedOption);

  const renderOption = (option: PaymentOption) => {
    const onSelect = () => setPaymentOption(option.id);

    return (
      <RadioButton
        key={option.id}
        icon={option.icon}
        text={option.text}
        iconColor={option.color}
        isSelected={paymentOption === option.id}
        onSelect={onSelect}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information</Text>
        <ContactInfo />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentContainer}>{paymentOptions.map(renderOption)}</View>
      </View>
    </SafeAreaView>
  );
};
