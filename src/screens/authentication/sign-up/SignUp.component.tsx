import React, {useRef, useState} from 'react';
import {Field, Formik} from 'formik';
import {ActivityIndicator, Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {useStore} from '../../../store/store';
import {styles} from './sign-up.styles';
import {TextField} from '../text-field/TextField.component';

interface Props {
  goToDashboard: () => void;
}

interface SignUpValues {
  email: string;
  password: string;
  passwordAgain: string;
}

export const SignUp: React.FC<Props> = observer(({goToDashboard}) => {
  const {authentication} = useStore();
  const [loading, setLoading] = useState(false);
  const password = useRef<TextInput>(null);
  const passwordAgain = useRef<TextInput>(null);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const submitSignUp = async (values: SignUpValues) => {
    try {
      setLoading(true);
      const response = await authentication.register(values.email, values.password, values.passwordAgain);
      if (response) {
        goToDashboard();
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const focusPasswordField = () => password.current?.focus();
  const focusPasswordAgainField = () => passwordAgain.current?.focus();

  return (
    <View style={styles.container}>
      <Formik initialValues={{email: '', password: '', passwordAgain: ''}} validationSchema={SignUpSchema} onSubmit={submitSignUp}>
        {({handleSubmit, errors}) => (
          <>
            <View style={styles.formContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#FF460A" />
              ) : (
                <>
                  <Text style={styles.error}>{errors.email}</Text>
                  <Field label="Email" component={TextField} name="email" autoCompleteType="email" onSubmitEditing={focusPasswordField} />
                  <Field
                    label="Password"
                    innerRef={password}
                    component={TextField}
                    name="password"
                    secureTextEntry
                    onSubmitEditing={focusPasswordAgainField}
                  />
                  <Field
                    label="Password again"
                    innerRef={passwordAgain}
                    component={TextField}
                    name="passwordAgain"
                    secureTextEntry
                    onSubmitEditing={handleSubmit}
                  />
                </>
              )}
            </View>
            <CustomButton disabled={loading} text="Sign-up" onPress={handleSubmit} buttonStyle={styles.button} labelStyle={styles.label} />
          </>
        )}
      </Formik>
    </View>
  );
});
