import React from 'react';
import {View} from 'react-native';

import {DefaultStyledText} from '../../components/app-text/AppText.component';
import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {OnboardingLogo} from './Logo.component';
import {PeopleScene} from './PeopleScene.component';
import {styles} from './styles/onboarding.styles';
import {AuthFlowScreens} from '../../navigation/auth-flow-stack/routes.types';
import {AuthFlowNavigatorScreenProps} from '../../navigation/auth-flow-stack/stack.types';
import {useTheme} from '../../theme/theme';

export const Onboarding: React.FC<AuthFlowNavigatorScreenProps<AuthFlowScreens.Onboarding>> = ({navigation}) => {
  const {theme} = useTheme();
  const navigateToAuthentication = () => navigation.navigate(AuthFlowScreens.Authentication);

  return (
    <View style={[styles.container, {backgroundColor: theme.colorScheme.secondaryBackground}]}>
      <View style={styles.wrapper}>
        <OnboardingLogo />
        <DefaultStyledText style={styles.title}>Food for Everyone</DefaultStyledText>
        <PeopleScene />
      </View>
      <CustomButton
        text="Get Started"
        onPress={navigateToAuthentication}
        buttonStyle={styles.button}
        labelStyle={{color: theme.colorScheme.secondaryBackground}}
      />
    </View>
  );
};
