import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {Formik, type FormikHelpers} from 'formik';
import {ActivityIndicator, View} from 'react-native';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {styles} from './login.styles';
import {useStore} from '../../../store/store';
import {LoginForm} from './login-form/LoginForm.component';

interface Props {
  goToDashboard: () => void;
}

export interface LoginValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const Login: React.FC<Props> = observer(({goToDashboard}) => {
  const {authentication} = useStore();
  const [loading, setLoading] = useState(false);

  const submitLogin = async (values: LoginValues, actions: FormikHelpers<LoginValues>) => {
    try {
      setLoading(true);
      const response = await authentication.login(values.email, values.password);
      if (response) {
        goToDashboard();
      }
    } catch (e) {
      actions.setErrors({email: 'Incorrent email or password', password: 'Incorrent email or password'});
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = () => {
    // TODO: reset passcode action
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: 'vladyslav.kucheruk@computools.com', password: 'fVRMzwemhBKgfT6'}}
        validationSchema={LoginSchema}
        onSubmit={submitLogin}>
        {({handleSubmit}) => (
          <>
            <View style={styles.formContainer}>
              {loading ? <ActivityIndicator size="large" color="#FF460A" /> : <LoginForm resetPassword={resetPassword} handleSubmit={handleSubmit} />}
            </View>
            <CustomButton disabled={loading} text="Login" onPress={handleSubmit} buttonStyle={styles.button} labelStyle={styles.label} />
          </>
        )}
      </Formik>
    </View>
  );
});
