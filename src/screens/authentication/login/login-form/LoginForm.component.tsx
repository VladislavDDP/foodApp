import React, {useRef} from 'react';
import {Field} from 'formik';
import {TextInput} from 'react-native';

import {TextField} from '../../text-field/TextField.component';
import {TextButton} from '../../../../components/text-button/TextButton.component';
import {localisation} from '../../../../localization/localization';

interface Props {
  resetPassword: () => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const LoginForm: React.FC<Props> = ({resetPassword, handleSubmit}) => {
  const password = useRef<TextInput>(null);
  const focusPasswordField = () => password.current?.focus();

  return (
    <>
      <Field label={localisation.t('email')} component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
      <Field
        label={localisation.t('password')}
        innerRef={password}
        component={TextField}
        name="password"
        secureTextEntry
        onSubmitEditing={handleSubmit}
      />
      <TextButton title={localisation.t('buttons.forgotPasscode')} onPress={resetPassword} />
    </>
  );
};
