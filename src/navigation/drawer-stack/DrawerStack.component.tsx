import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {drawerScreens} from './routes.types';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';
import {Screens} from '../root-stack/routes.types';
import {CustomDrawerContent} from '../../screens/drawer/custom-drawer-content/CustomDrawerContent.component';
import {styles} from './styles/drawer-stack.styles';
import {colors} from '../../vars/variables';

const Drawer = createDrawerNavigator();

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

export const DrawerStack: React.FC<Props> = ({navigation}) => {
  const navigateToCart = () => {
    // TODO: navigation.navigate(Screens.ShoppingCart)
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          overlayColor: colors.overlay,
          headerTitle: '',
          headerTintColor: colors.dark,
          headerLeftContainerStyle: styles.leftIcon,
          headerRightContainerStyle: styles.rightIcon,
          headerRight: () => <Icon name="shopping-cart" color="#999" size={25} onPress={navigateToCart} />,
          headerStyle: styles.header,
          sceneContainerStyle: styles.sceneContainer,
          drawerType: 'slide',
          drawerStyle: styles.drawerStyle,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {drawerScreens.map(drawer => (
          <Drawer.Screen key={drawer.id} name={drawer.name} component={drawer.component} />
        ))}
      </Drawer.Navigator>
    </View>
  );
};
