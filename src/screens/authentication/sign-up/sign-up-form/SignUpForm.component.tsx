import React, {useRef} from 'react';
import {Field} from 'formik';
import {TextInput, ScrollView} from 'react-native';

import {TextField} from '../../text-field/TextField.component';
import {styles} from './sign-up-form.styles';

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const SignUpForm: React.FC<Props> = ({handleSubmit}) => {
  const email = useRef<TextInput>(null);
  const password = useRef<TextInput>(null);
  const passwordAgain = useRef<TextInput>(null);
  const focusEmailField = () => email.current?.focus();
  const focusPasswordField = () => password.current?.focus();
  const focusPasswordAgainField = () => passwordAgain.current?.focus();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Field label="Username" component={TextField} name="username" onSubmitEditing={focusEmailField} />
      <Field label="Email" innerRef={email} component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
      <Field label="Password" innerRef={password} component={TextField} name="password" secureTextEntry onSubmitEditing={focusPasswordAgainField} />
      <Field
        label="Password again"
        innerRef={passwordAgain}
        component={TextField}
        name="passwordAgain"
        secureTextEntry
        onSubmitEditing={handleSubmit}
      />
    </ScrollView>
  );
};
