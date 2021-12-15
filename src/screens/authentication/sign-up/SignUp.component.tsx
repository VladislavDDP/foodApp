import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {styles} from './sign-up.styles';

export const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');

  const signUp = () => {
    // TODO: sign up action
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setEmail} value={email} label="Email address" placeholder="..." />
        <InputField setInput={setPassword} value={password} label="Password" placeholder="..." isSecure />
        <InputField setInput={setPasswordAgain} value={passwordAgain} label="Password again" placeholder="..." isSecure />
      </View>
      <CustomButton text="Sign-up" onPress={signUp} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
