import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {Formik, type FormikValues, type FormikHelpers} from 'formik';
import {ActivityIndicator, View} from 'react-native';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/custom-button/CustomButton.component';
import {styles} from './login.styles';
import {useStore} from '../../../store/store';
import {LoginForm} from './login-form/LoginForm.component';
import {localisation} from '../../../localization/localization';

interface Props {
  goToDashboard: () => void;
}

export interface LoginValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email(localisation.t('errors.invalidEmail')).required(localisation.t('errors.required')),
  password: Yup.string().required(localisation.t('errors.required')),
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
      actions.setErrors({email: localisation.t('errors.incorrectEmailOrPassword'), password: localisation.t('errors.incorrectEmailOrPassword')});
    } finally {
      setLoading(false);
    }
  };

  const renderForm = ({handleSubmit}: FormikValues) => (
    <>
      <View style={styles.formContainer}>
        {loading ? <ActivityIndicator size="large" color="#FF460A" /> : <LoginForm resetPassword={resetPassword} handleSubmit={handleSubmit} />}
      </View>
      <CustomButton disabled={loading} text={localisation.t('buttons.login')} onPress={handleSubmit} />
    </>
  );

  const resetPassword = () => {
    // TODO: reset passcode action
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={{email: '', password: ''}} validationSchema={LoginSchema} onSubmit={submitLogin}>
        {renderForm}
      </Formik>
    </View>
  );
});
