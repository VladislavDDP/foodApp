import React from 'react';
import {TouchableOpacity} from 'react-native';

import {AppText} from '../../../components/app-text/AppText.component';
import {styles} from './forgot-passcode-btn.styles';

export const ForgotPasscodeBtn = () => (
  <TouchableOpacity>
    <AppText text="Forgot passcode?" labelStyle={styles.passcodeLabel} />
  </TouchableOpacity>
);
