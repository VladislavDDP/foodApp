import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../components/app-text/AppText.component';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {styles} from './login.styles';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setInputEmail = (text: string) => setEmail(text);
  const setInputPassword = (text: string) => setPassword(text);

  const login = () => {
    // TODO: login acion
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setInputEmail} value={email} label="Email address" placeholder="..." isSecure={false} />
        <InputField setInput={setInputPassword} value={password} label="Password" placeholder="..." isSecure={true} />
        <TouchableOpacity>
          <AppText text="Forgot passcode?" labelStyle={styles.passcodeLabel} />
        </TouchableOpacity>
      </View>
      <CustomButton text="Login" callback={login} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
