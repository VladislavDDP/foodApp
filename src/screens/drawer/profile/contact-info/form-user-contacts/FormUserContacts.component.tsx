import React from 'react';
import type {FormikValues} from 'formik';
import {TextInput, View} from 'react-native';

import {SubmitButton} from '../../../../../components/submit-button/SubmitButton.component';
import {styles} from '../contact-info.styles';
import {useTheme} from '../../../../../theme/theme';

interface Props {
  switchEditMode: () => void;
}

export const FormUserContacts: React.FC<Props & FormikValues> = ({handleChange, handleBlur, handleSubmit, values}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.infoText}>
      <View style={styles.infoContacts}>
        <View style={styles.nameEmailContainer}>
          <TextInput
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={20}
            style={[styles.nameText, styles.activeTextInput, {color: theme.colorScheme.primaryText}]}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={20}
            style={[styles.emailText, styles.activeTextInput]}
          />
        </View>
      </View>
      <TextInput
        onChangeText={handleChange('address')}
        onBlur={handleBlur('address')}
        value={values.address}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={60}
        multiline={true}
        numberOfLines={3}
        style={[styles.addressText, styles.activeTextInput]}
      />
      <SubmitButton title="Confirm" onPress={handleSubmit} />
    </View>
  );
};
