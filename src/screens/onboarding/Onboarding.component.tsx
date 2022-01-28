import React from 'react';
import {View} from 'react-native';

import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {OnboardingLogo} from './Logo.component';
import {PeopleScene} from './PeopleScene.component';
import {styles} from './styles/onboarding.styles';
import {AuthFlowScreens} from '../../navigation/auth-flow-stack/routes.types';
import {AuthFlowNavigatorScreenProps} from '../../navigation/auth-flow-stack/stack.types';
import {useTheme} from '../../theme/theme';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';

export const Onboarding: React.FC<AuthFlowNavigatorScreenProps<AuthFlowScreens.Onboarding>> = ({navigation}) => {
  const {theme} = useTheme();
  const navigateToAuthentication = () => navigation.navigate(AuthFlowScreens.Authentication);

  return (
    <View style={[styles.container, {backgroundColor: theme.colorScheme.secondary}]}>
      <View style={styles.wrapper}>
        <OnboardingLogo />
        <TextWrapper style={styles.title}>Food for Everyone</TextWrapper>
        <PeopleScene />
      </View>
      <CustomButton text="Get Started" buttonStyle={styles.buttonStyle} labelStyle={styles.labelStyle} onPress={navigateToAuthentication} />
    </View>
  );
};
