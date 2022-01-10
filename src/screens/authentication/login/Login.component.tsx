import React, {useState} from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {InputField} from '../../../components/input-field/InputField.component';
import {TextBtn} from '../text-btn/TextBtn.component';
import {styles} from './login.styles';

interface Props {
  login: (email: string, password: string) => void;
}

export const Login: React.FC<Props> = ({login}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginUser = () => {
    login(email, password);
  };

  const forgotPasscode = () => {
    // TODO: forgot passcode action
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField setInput={setEmail} value={email} label="Email address" placeholder="..." />
        <InputField setInput={setPassword} value={password} label="Password" placeholder="..." isSecure />
        <TextBtn title="Forgot passcode?" onPress={forgotPasscode} />
      </View>
      <CustomButton text="Login" onPress={loginUser} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
