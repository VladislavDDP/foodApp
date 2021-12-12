import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {styles} from './sign-up.styles';

export const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');

  const setInputEmail = (text: string) => setEmail(text);
  const setInputPassword = (text: string) => setPassword(text);
  const setInputPasswordAgain = (text: string) => setPasswordAgain(text);

  const signUp = () => {
    // TODO: sign up action
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setInputEmail} value={email} label="Email address" placeholder="..." isSecure={false} />
        <InputField setInput={setInputPassword} value={password} label="Password" placeholder="..." isSecure={true} />
        <InputField setInput={setInputPasswordAgain} value={passwordAgain} label="Password again" placeholder="..." isSecure={true} />
      </View>
      <CustomButton text="Sign-up" callback={signUp} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
