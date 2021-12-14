import React from 'react';
import {View} from 'react-native';

import {DefaultStyledText} from '../../components/app-text/AppText.component';
import {CustomButton} from '../../components/button/CustomButton.component';
import {OnboardingLogo} from './Logo.component';
import {PeopleScene} from './PeopleScene.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from '../styles/onboarding.styles';

interface Props extends AppNavigatorScreenProps<Screens.Onboarding> {}

export const Onboarding: React.FC<Props> = ({navigation}) => {
  const navigateToAuthentication = () => navigation.navigate(Screens.Authentication);
  return (
    <View style={styles.container}>
      <OnboardingLogo />
      <DefaultStyledText style={styles.title}>Food for Everyone</DefaultStyledText>
      <PeopleScene />
      <CustomButton text="Get Started" onPress={navigateToAuthentication} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
