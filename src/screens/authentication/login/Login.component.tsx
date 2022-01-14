import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {TextBtn} from '../text-btn/TextBtn.component';
import {styles} from './login.styles';

interface Props {
  error: string;
  login: (email: string, password: string) => void;
}

export const Login: React.FC<Props> = ({error, login}) => {
  const [email, setEmail] = useState<string>('vladyslav.kucheruk@computools.com');
  const [password, setPassword] = useState<string>('fVRMzwemhBKgfT6');
  const loginError = error ? {backgroundColor: 'red'} : {};

  const loginUser = () => {
    login(email, password);
  };

  const forgotPasscode = () => {
    // TODO: forgot passcode action
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setEmail} error={loginError} value={email} label="Email address" />
        <InputField setInput={setPassword} error={loginError} value={password} label="Password" isSecure />
        <TextBtn title="Forgot passcode?" onPress={forgotPasscode} />
      </View>
      <CustomButton text="Login" onPress={loginUser} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
