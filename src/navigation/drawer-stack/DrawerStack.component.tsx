import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerProps, drawerScreens} from './routes.types';
import {CustomDrawerContent} from '../../screens/drawer/custom-drawer-content/CustomDrawerContent.component';
import {styles} from './styles/drawer-stack.styles';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';
import {Screens} from '../root-stack/routes.types';
import {DrawerScreenContainer} from './screen-container/DrawerScreenContainer.component';

const Drawer = createDrawerNavigator();

export const DrawerStack: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = ({navigation}) => {
  const renderDrawerScreen = (value: DrawerProps) => (
    <Drawer.Screen key={value.id} name={value.name}>
      {props => (
        <DrawerScreenContainer navigation={props.navigation}>
          <value.component />
        </DrawerScreenContainer>
      )}
    </Drawer.Screen>
  );

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          sceneContainerStyle: styles.sceneContainer,
          drawerType: 'slide',
          drawerStyle: styles.drawerStyle,
        }}
        drawerContent={props => <CustomDrawerContent stackNavigation={navigation} state={props.state} drawerNavigation={props.navigation} />}>
        {drawerScreens.map(renderDrawerScreen)}
      </Drawer.Navigator>
    </View>
  );
};
