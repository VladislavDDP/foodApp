import React, {useRef} from 'react';
import {Field} from 'formik';
import {TextInput} from 'react-native';

import {TextField} from '../../text-field/TextField.component';

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const SignUpForm: React.FC<Props> = ({handleSubmit}) => {
  const password = useRef<TextInput>(null);
  const passwordAgain = useRef<TextInput>(null);
  const focusPasswordField = () => password.current?.focus();
  const focusPasswordAgainField = () => passwordAgain.current?.focus();

  return (
    <>
      <Field label="Email" component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
      <Field label="Password" innerRef={password} component={TextField} name="password" secureTextEntry onSubmitEditing={focusPasswordAgainField} />
      <Field
        label="Password again"
        innerRef={passwordAgain}
        component={TextField}
        name="passwordAgain"
        secureTextEntry
        onSubmitEditing={handleSubmit}
      />
    </>
  );
};
