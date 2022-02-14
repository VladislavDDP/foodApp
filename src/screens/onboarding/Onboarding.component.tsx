import React from 'react';
import {InteractionManager, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/theme';
import {OnboardingLogo} from './Logo.component';
import {styles} from './styles/onboarding.styles';
import {PeopleScene} from './PeopleScene.component';
import {localisation} from '../../localization/localization';
import {AuthFlowScreens} from '../../navigation/auth-flow-stack/routes.types';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';
import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {AuthFlowNavigatorScreenProps} from '../../navigation/auth-flow-stack/stack.types';

export const Onboarding: React.FC<AuthFlowNavigatorScreenProps<AuthFlowScreens.Onboarding>> = ({navigation}) => {
  const {theme} = useTheme();

  const navigateToAuthentication = () => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(AuthFlowScreens.Authentication);
    });
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.colorScheme.secondary}]}>
      <View style={styles.wrapper}>
        <OnboardingLogo />
        <TextWrapper style={styles.title}>{localisation.t('onboardingTitle')}</TextWrapper>
        <PeopleScene />
      </View>
      <CustomButton
        text={localisation.t('buttons.getStarted')}
        style={styles.buttonStyle}
        labelStyle={{color: theme.colorScheme.accent}}
        onPress={navigateToAuthentication}
      />
    </SafeAreaView>
  );
};
