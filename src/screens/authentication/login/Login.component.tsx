import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {ForgotPasscodeBtn} from '../forgot-passcode-btn/ForgotPasscodeBtn.component';
import {styles} from './login.styles';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    // TODO: login acion
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setEmail} value={email} label="Email address" placeholder="..." isSecure={false} />
        <InputField setInput={setPassword} value={password} label="Password" placeholder="..." isSecure={true} />
        <ForgotPasscodeBtn />
      </View>
      <CustomButton text="Login" onPress={login} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
