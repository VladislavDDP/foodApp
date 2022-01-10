import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {SafeAreaView, View} from 'react-native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import type {DrawerNavigationState, ParamListBase} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {DrawerContentItem} from './content-item/DrawerContentItem.component';
import {drawerScreens} from '../../../navigation/drawer-stack/routes.types';
import {styles} from './custom-drawer-content.styles';
import {Drawers} from '../../../navigation/drawer-stack/drawer.types';
import {colors} from '../../../vars/variables';
import {StackParamList} from '../../../navigation/root-stack/stack.types';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {SignOut} from './sign-out/SignOut.component';

interface Props {
  state: DrawerNavigationState<ParamListBase>;
  stackNavigation: NativeStackNavigationProp<StackParamList, Screens.DrawerStack>;
  drawerNavigation: DrawerNavigationHelpers;
}

export const CustomDrawerContent: React.FC<Props> = ({stackNavigation, drawerNavigation, state}) => {
  const goToDrawer = (drawerName: Drawers) => drawerNavigation.navigate(drawerName);

  return (
    <DrawerContentScrollView scrollEnabled contentContainerStyle={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.itemsContainer}>
          {drawerScreens.map(drawer => (
            <DrawerContentItem
              key={drawer.id}
              name={drawer.name}
              color={state.index === drawer.id ? colors.dark : colors.white}
              icon={drawer.icon}
              goToDrawer={goToDrawer}
            />
          ))}
        </View>
        <SignOut navigation={stackNavigation} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};
