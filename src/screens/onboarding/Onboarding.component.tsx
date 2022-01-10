import React from 'react';
import {View} from 'react-native';

import {DefaultStyledText} from '../../components/app-text/AppText.component';
import {CustomButton} from '../../components/button/CustomButton.component';
import {OnboardingLogo} from './Logo.component';
import {PeopleScene} from './PeopleScene.component';
import {styles} from './styles/onboarding.styles';
import {AuthFlowScreens} from '../../navigation/auth-flow-stack/routes.types';
import {AuthFlowNavigatorScreenProps} from '../../navigation/auth-flow-stack/stack.types';

interface Props extends AuthFlowNavigatorScreenProps<AuthFlowScreens.Onboarding> {}

export const Onboarding: React.FC<Props> = ({navigation}) => {
  const navigateToAuthentication = () => navigation.navigate(AuthFlowScreens.Authentication);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <OnboardingLogo />
        <DefaultStyledText style={styles.title}>Food for Everyone</DefaultStyledText>
        <PeopleScene />
      </View>
      <CustomButton text="Get Started" onPress={navigateToAuthentication} buttonStyle={styles.button} labelStyle={styles.label} />
    </View>
  );
};
