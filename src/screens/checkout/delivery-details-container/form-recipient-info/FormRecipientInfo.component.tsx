import React from 'react';
import type {FormikValues} from 'formik';
import {TextInput, View} from 'react-native';

import {SubmitButton} from '../../../../components/submit-button/SubmitButton.component';
import {styles} from './form-recipient-info.styles';
import {useTheme} from '../../../../theme/theme';

export const FormRecipientInfo: React.FC<FormikValues> = ({handleChange, handleBlur, handleSubmit, values}) => {
  const {theme} = useTheme();

  return (
    <View>
      <TextInput
        style={[styles.customerName, styles.activeInput, {color: theme.colorScheme.primaryText}]}
        autoFocus
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
      />
      <View style={styles.separator} />
      <TextInput
        style={[styles.activeInput, {color: theme.colorScheme.primaryText}]}
        onChangeText={handleChange('address')}
        onBlur={handleBlur('address')}
        value={values.address}
        multiline
      />
      <View style={styles.separator} />
      <TextInput
        style={[styles.activeInput, {color: theme.colorScheme.primaryText}]}
        onChangeText={handleChange('phone')}
        onBlur={handleBlur('phone')}
        value={values.phone}
      />
      <SubmitButton title="Confirm" onPress={handleSubmit} />
    </View>
  );
};
