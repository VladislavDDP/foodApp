import React, {useCallback, useEffect, useRef} from 'react';
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
import {useStore} from '../../store/store';

interface Props extends AppNavigatorScreenProps<Screens.Authentication> {}

const startValue = 0;
const {width} = Dimensions.get('window');

export const AuthenticationTabs: React.FC<Props> = observer(({navigation}) => {
  const {authentication} = useStore();

  const scrollX = useRef(new Animated.Value(startValue)).current;
  const slidesRef = useRef<ScrollView>();

  const goToDashboard = useCallback(() => {
    navigation.navigate(Screens.DrawerStack);
  }, [navigation]);

  useEffect(() => {
    if (authentication.authorized) {
      goToDashboard();
    }
  }, [authentication.authorized, goToDashboard, navigation]);

  const scrollToAnother = (page: number) => slidesRef.current?.scrollTo({x: page * width});

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
          <Login login={authentication.login} />
          <SignUp register={authentication.register} />
        </Animated.ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
});
