import React from 'react';
import {View} from 'react-native';

import {AppText} from '../../components/app-text/AppText.component';
import {CustomButton} from '../../components/button/CustomButton.component';
import {OnboardingLogo} from './Logo.component';
import {PeopleScene} from './PeopleScene.component';
import {styles} from './styles/onboarding.styles';

export const Onboarding = () => (
  <View style={styles.container}>
    <OnboardingLogo />
    <AppText text="Food for Everyone" labelStyle={styles.title} />
    <PeopleScene />
    <CustomButton text="Get Started" buttonStyle={styles.button} labelStyle={styles.label} />
  </View>
);
