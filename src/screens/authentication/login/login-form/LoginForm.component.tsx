import React, {useRef} from 'react';
import {Field} from 'formik';
import {TextInput} from 'react-native';

import {TextField} from '../../text-field/TextField.component';
import {TextBtn} from '../../text-btn/TextBtn.component';

interface Props {
  resetPassword: () => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const LoginForm: React.FC<Props> = ({resetPassword, handleSubmit}) => {
  const password = useRef<TextInput>(null);
  const focusPasswordField = () => password.current?.focus();

  return (
    <>
      <Field label="Email" component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
      <Field label="Password" innerRef={password} component={TextField} name="password" secureTextEntry onSubmitEditing={handleSubmit} />
      <TextBtn title="Forgot passcode?" onPress={resetPassword} />
    </>
  );
};
