import React, {useState} from 'react';
import {Formik, type FormikHelpers, type FormikValues} from 'formik';
import {ActivityIndicator, View} from 'react-native';
import {observer} from 'mobx-react';
import * as Yup from 'yup';

import {CustomButton} from '../../../components/custom-button/CustomButton.component';
import {useStore} from '../../../store/store';
import {styles} from './sign-up.styles';
import {SignUpForm} from './sign-up-form/SignUpForm.component';
import {localisation} from '../../../localization/localization';

interface SignUpValues {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required(localisation.t('errors.requiredUsername')),
  email: Yup.string().email(localisation.t('errors.invalidEmail')).required(localisation.t('errors.requiredEmail')),
  password: Yup.string().required(localisation.t('errors.requiredPassword')),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], localisation.t('errors.passwordsMustMatch'))
    .required(localisation.t('errors.requiredPasswordAgain')),
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
      actions.setErrors({email: localisation.t('emailAlreadyExists')});
    } finally {
      setLoading(false);
    }
  };

  const renderForm = ({handleSubmit}: FormikValues) => (
    <>
      <View style={styles.formContainer}>
        {loading ? <ActivityIndicator size="large" color="#FF460A" /> : <SignUpForm handleSubmit={handleSubmit} />}
      </View>
      <CustomButton disabled={loading} text={localisation.t('buttons.signUp')} onPress={handleSubmit} />
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
