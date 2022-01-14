import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {useStore} from '../../../store/store';
import {ContactInfo} from './contact-info/ContactInfo.component';
import {PaymentOption, paymentOptions} from './paymentOption.types';
import {styles} from './profile.styles';

export const Profile = observer(() => {
  const {profile} = useStore();

  const renderOption = (option: PaymentOption) => {
    const onSelect = () => profile.setPaymentMethod(option.text);

    return (
      <RadioButton
        key={option.id}
        icon={option.icon}
        text={option.text}
        iconColor={option.color}
        isSelected={profile.paymentOption === option.text}
        shouldSeparate={option.id !== paymentOptions.length}
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
});
