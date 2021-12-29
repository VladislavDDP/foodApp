import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {DrawerComponents, drawerScreens} from './routes.types';
import {View} from 'react-native';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';
import {Screens} from '../root-stack/routes.types';
import {CustomDrawerContent} from '../../screens/drawer/custom-drawer-content/CustomDrawerContent.component';
import {styles} from './styles/drawer-stack.styles';
import {colors} from '../../vars/variables';
import {Drawers} from './drawer.types';

const Drawer = createDrawerNavigator();

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

interface DrawerProps {
  id: number;
  icon: string;
  name: Drawers;
  component: DrawerComponents;
}

export const DrawerStack: React.FC<Props> = ({navigation}) => {
  const navigateToCart = () => {
    // TODO: navigation.navigate(Screens.ShoppingCart)
  };

  const renderDrawerScreen = (value: DrawerProps) => (
    <Drawer.Screen key={value.id} options={{headerShown: value.name === Drawers.Market}} name={value.name} component={value.component} />
  );

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
        {drawerScreens.map(renderDrawerScreen)}
      </Drawer.Navigator>
    </View>
  );
};
