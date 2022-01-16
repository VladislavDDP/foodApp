import React, {useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {Field, Formik, type FormikHelpers} from 'formik';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {TextBtn} from '../text-btn/TextBtn.component';
import {styles} from './login.styles';
import {useStore} from '../../../store/store';
import {TextField} from '../text-field/TextField.component';

interface Props {
  goToDashboard: () => void;
}

export interface LoginValues {
  email: string;
  password: string;
}

export const Login: React.FC<Props> = observer(({goToDashboard}) => {
  const {authentication} = useStore();
  const [loading, setLoading] = useState(false);
  const password = useRef<TextInput>(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

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

  const focusPasswordField = () => password.current?.focus();

  const forgotPasscode = () => {
    // TODO: forgot passcode action
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: 'vladyslav.kucheruk@computools.com', password: 'fVRMzwemhBKgfT6'}}
        validationSchema={LoginSchema}
        onSubmit={submitLogin}>
        {({handleSubmit, errors}) => (
          <>
            <View style={styles.formContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#FF460A" />
              ) : (
                <>
                  <Text style={styles.error}>{errors.email}</Text>
                  <View>
                    <Field label="Email" component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
                    <Field
                      label="Password"
                      innerRef={password}
                      component={TextField}
                      name="password"
                      secureTextEntry
                      onSubmitEditing={handleSubmit}
                    />
                  </View>
                  <TextBtn title="Forgot passcode?" onPress={forgotPasscode} />
                </>
              )}
            </View>
            <CustomButton disabled={loading} text="Login" onPress={handleSubmit} buttonStyle={styles.button} labelStyle={styles.label} />
          </>
        )}
      </Formik>
    </View>
  );
});
