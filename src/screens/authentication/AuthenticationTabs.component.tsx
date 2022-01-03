import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Login} from './login/Login.component';
import {SignUp} from './sign-up/SignUp.component';
import {Logo} from './logo/Logo.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from '../styles/authentication-tabs.styles';
import {height, width} from '../../vars/variables';
import {NavigationTab} from './navigation-tab/NavigationTab.component';

interface Props extends AppNavigatorScreenProps<Screens.Authentication> {}

const startValue = 0;

export const AuthenticationTabs: React.FC<Props> = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(startValue)).current;
  const slidesRef = useRef<ScrollView>();

  const scrollToAnother = (page: number) => slidesRef.current?.scrollTo({x: page * width});

  const goToDashboard = () => navigation.navigate(Screens.DrawerStack);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{height: height}}
      extraHeight={20}
      extraScrollHeight={80}
      enableOnAndroid={true}
      bounces={false}
      keyboardShouldPersistTaps="never"
      scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <View style={styles.tabs}>
            <NavigationTab page={0} title="Login" scrollX={scrollX} scrollToAnother={scrollToAnother} />
            <NavigationTab page={1} title="Sign-up" scrollX={scrollX} scrollToAnother={scrollToAnother} />
          </View>
        </View>
        <Animated.ScrollView
          ref={slidesRef}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.animatedContainer}
          pagingEnabled
          horizontal>
          <Login navigateToDashboard={goToDashboard} />
          <SignUp navigateToDashboard={goToDashboard} />
        </Animated.ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};
