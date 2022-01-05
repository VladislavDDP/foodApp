import React from 'react';
import {TextInput, View} from 'react-native';

import {SubmitButton} from '../../../../components/submit-button/SubmitButton.component';
import {DeliveryFormikTypes} from '../DeliveryDetails.component';
import {styles} from './form-recipient-info.styles';

export const FormRecipientInfo: React.FC<DeliveryFormikTypes> = ({handleChange, handleBlur, handleSubmit, values}) => (
  <View>
    <TextInput
      style={[styles.customerName, styles.activeInput]}
      autoFocus
      onChangeText={handleChange('name')}
      onBlur={handleBlur('name')}
      value={values.name}
    />
    <View style={styles.separator} />
    <TextInput style={styles.activeInput} onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} multiline />
    <View style={styles.separator} />
    <TextInput style={styles.activeInput} onChangeText={handleChange('phone')} onBlur={handleBlur('phone')} value={values.phone} />
    <SubmitButton title="Confirm" onPress={handleSubmit} />
  </View>
);
