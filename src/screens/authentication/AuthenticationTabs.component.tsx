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
import {useTheme} from '../../theme/theme';
import {ViewTheme} from '../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../components/view-theme/ColorIntencity';
import {localisation} from '../../localization/localization';

interface Props extends AppNavigatorScreenProps<Screens.AuthFlowStack> {}

const startValue = 0;
const {width} = Dimensions.get('window');

export const AuthenticationTabs: React.FC<Props> = observer(({navigation}) => {
  const {theme} = useTheme();
  const scrollX = useRef(new Animated.Value(startValue)).current;
  const slidesRef = useRef<ScrollView>();

  const goToDashboard = useCallback(() => {
    navigation.replace(Screens.DrawerStack);
  }, [navigation]);

  const scrollToAuthProcess = (page: number) => slidesRef.current?.scrollTo({x: page * width});

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      extraHeight={200}
      extraScrollHeight={100}
      bounces={false}
      keyboardShouldPersistTaps="never"
      scrollEnabled={false}>
      <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
        <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.header}>
          <Logo />
          <View style={styles.tabs}>
            <NavigationTab page={0} title={localisation.t('login')} scrollX={scrollX} scrollToAnother={scrollToAuthProcess} />
            <NavigationTab page={1} title={localisation.t('signUp')} scrollX={scrollX} scrollToAnother={scrollToAuthProcess} />
          </View>
        </ViewTheme>
        <Animated.ScrollView
          ref={slidesRef}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={[styles.animatedContainer, {backgroundColor: theme.colorScheme.primaryLight}]}
          pagingEnabled
          horizontal>
          <Login goToDashboard={goToDashboard} />
          <SignUp goToDashboard={goToDashboard} />
        </Animated.ScrollView>
      </ViewTheme>
    </KeyboardAwareScrollView>
  );
});
