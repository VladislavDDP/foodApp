import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {SafeAreaView, View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

import {DrawerContentItem} from './content-item/DrawerContentItem.component';
import {drawerScreens} from '../../../navigation/drawer-stack/routes.types';
import {styles} from './custom-drawer-content.styles';
import {SignOut} from './sign-out/SignOut.component';
import {Drawers} from '../../../navigation/drawer-stack/drawer.types';
import {colors} from '../../../vars/variables';

interface Props extends DrawerContentComponentProps {}

export const CustomDrawerContent: React.FC<Props> = props => {
  const goToDrawer = (drawerName: Drawers) => props.navigation.navigate(drawerName);

  return (
    <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.itemsContainer}>
          {drawerScreens.map(drawer => (
            <DrawerContentItem
              key={drawer.id}
              name={drawer.name}
              color={props.state.index === drawer.id ? colors.dark : colors.white}
              icon={drawer.icon}
              goToDrawer={goToDrawer}
            />
          ))}
        </View>
        <SignOut {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};
