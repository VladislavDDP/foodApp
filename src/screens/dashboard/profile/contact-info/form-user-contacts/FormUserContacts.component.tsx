import React from 'react';
import type {FormikValues} from 'formik';
import {View} from 'react-native';

import {SubmitButton} from '../../../../../components/submit-button/SubmitButton.component';
import {styles} from '../contact-info.styles';
import {InputTheme} from '../../../../../components/input-theme/InputTheme.component';

interface Props {
  switchEditMode: () => void;
}

export const FormUserContacts: React.FC<Props & FormikValues> = ({handleChange, handleBlur, handleSubmit, values}) => (
  <View style={styles.infoText}>
    <View style={styles.infoContacts}>
      <View style={styles.nameEmailContainer}>
        <InputTheme
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={20}
          style={[styles.nameText, styles.activeTextInput]}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
        <InputTheme
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
    <InputTheme
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
