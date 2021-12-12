import React from 'react';
import {View} from 'react-native';

import {AppText} from '../components/app-text/AppText.component';
import {CustomButton} from '../components/button/CustomButton.component';
import {OnboardingLogo} from '../components/onboarding/OnboardingLogo.component';
import {PeopleScene} from '../components/onboarding/PeopleScene.component';
import {Screens} from '../navigation/routes.types';
import {AppNavigatorScreenProps} from '../navigation/stack.types';
import {styles} from './styles/onboarding.styles';

interface Props extends AppNavigatorScreenProps<Screens.Onboarding> {}

export const Onboarding: React.FC<Props> = ({navigation}) => {
  const navigateToAuthentication = () => navigation.navigate(Screens.Authentication);
  return (
    <View style={styles.container}>
      <OnboardingLogo />
      <AppText text="Food for Everyone" labelStyle={styles.title} />
      <PeopleScene />
      <CustomButton text="Get Started" callback={navigateToAuthentication} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
