import React from 'react';
import {TextInput, View} from 'react-native';

import {SubmitButton} from '../../../../../components/submit-button/SubmitButton.component';
import {styles} from '../contact-info.styles';
import {UserContactsFormikTypes} from '../ContactInfo.component';

interface Props extends UserContactsFormikTypes {
  switchEditMode: () => void;
}

export const FormUserContacts: React.FC<Props> = ({handleChange, handleBlur, handleSubmit, values}) => (
  <View style={styles.infoText}>
    <View style={styles.infoContacts}>
      <View style={styles.nameEmailContainer}>
        <TextInput
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={20}
          style={[styles.nameText, styles.activeTextInput]}
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
