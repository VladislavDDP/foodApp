import React, {useState} from 'react';
import {Formik, type FormikValues} from 'formik';
import {ActivityIndicator, View} from 'react-native';
import {observer} from 'mobx-react';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/button/CustomButton.component';
import {useStore} from '../../../store/store';
import {styles} from './sign-up.styles';
import {SignUpForm} from './sign-up-form/SignUpForm.component';

interface SignUpValues {
  email: string;
  password: string;
  passwordAgain: string;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

interface Props {
  goToDashboard: () => void;
}

export const SignUp: React.FC<Props> = observer(({goToDashboard}) => {
  const {authentication} = useStore();
  const [loading, setLoading] = useState(false);

  const submitSignUp = async (values: SignUpValues) => {
    try {
      setLoading(true);
      const response = await authentication.register(values.email);
      if (response) {
        goToDashboard();
      }
    } catch (e) {
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
      <Formik initialValues={{email: '', password: '', passwordAgain: ''}} validationSchema={SignUpSchema} onSubmit={submitSignUp}>
        {renderForm}
      </Formik>
    </View>
  );
});
