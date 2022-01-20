import React, {useState} from 'react';
import {Formik, type FormikHelpers, type FormikValues} from 'formik';
import {ActivityIndicator, View} from 'react-native';
import {observer} from 'mobx-react';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {useStore} from '../../../store/store';
import {styles} from './sign-up.styles';
import {SignUpForm} from './sign-up-form/SignUpForm.component';

interface SignUpValues {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string().required('Password required'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password again required'),
});

interface Props {
  goToDashboard: () => void;
}

export const SignUp: React.FC<Props> = observer(({goToDashboard}) => {
  const {authentication} = useStore();
  const [loading, setLoading] = useState(false);

  const submitSignUp = async (values: SignUpValues, actions: FormikHelpers<SignUpValues>) => {
    try {
      setLoading(true);
      const response = await authentication.register(values.email, values.username, values.password);
      if (response) {
        goToDashboard();
      }
    } catch (e) {
      actions.setErrors({email: 'Email already exists'});
    } finally {
      setLoading(false);
    }
  };

  const renderForm = ({handleSubmit}: FormikValues) => (
    <>
      <View style={styles.formContainer}>
        {loading ? <ActivityIndicator size="large" color="#FF460A" /> : <SignUpForm handleSubmit={handleSubmit} />}
      </View>
      <CustomButton disabled={loading} text="Sign-up" onPress={handleSubmit} buttonStyle={styles.button} labelStyle={styles.label} />
    </>
  );

  return (
    <View style={styles.container}>
      <Formik initialValues={{username: '', email: '', password: '', passwordAgain: ''}} validationSchema={SignUpSchema} onSubmit={submitSignUp}>
        {renderForm}
      </Formik>
    </View>
  );
});
