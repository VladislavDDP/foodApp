import React, {useCallback, useRef} from 'react';
import {observer} from 'mobx-react';
import {Animated, Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Login} from './login/Login.component';
import {SignUp} from './sign-up/SignUp.component';
import {Logo} from './logo/Logo.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from '../styles/authentication-tabs.styles';
import {NavigationTab} from './navigation-tab/NavigationTab.component';

interface Props extends AppNavigatorScreenProps<Screens.AuthFlowStack> {}

const startValue = 0;
const {width} = Dimensions.get('window');

export const AuthenticationTabs: React.FC<Props> = observer(({navigation}) => {
  const scrollX = useRef(new Animated.Value(startValue)).current;
  const slidesRef = useRef<ScrollView>();

  const goToDashboard = useCallback(() => {
    navigation.replace(Screens.DrawerStack);
  }, [navigation]);

  const scrollToAuthProcess = (page: number) => slidesRef.current?.scrollTo({x: page * width});

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
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
            <NavigationTab page={0} title="Login" scrollX={scrollX} scrollToAnother={scrollToAuthProcess} />
            <NavigationTab page={1} title="Sign-up" scrollX={scrollX} scrollToAnother={scrollToAuthProcess} />
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
          <Login goToDashboard={goToDashboard} />
          <SignUp goToDashboard={goToDashboard} />
        </Animated.ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
});
