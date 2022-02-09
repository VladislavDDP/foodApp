import {OfferPromo} from '../../screens/drawer/offer-promo/OfferPromo.component';
import {Orders} from '../../screens/drawer/orders/Orders.component';
import {PrivacyPolicy} from '../../screens/drawer/privacy-policy/PrivacyPolicy.component';
import {SettingsScreen} from '../../screens/drawer/settings/SettingsScreen.component';
import {TabStack} from '../tab-navigation/TabStack.component';
import {Drawers} from './drawer.types';

export type DrawerComponents = () => JSX.Element;

export interface DrawerProps {
  id: number;
  icon: string;
  name: Drawers;
  component: DrawerComponents;
}

export const drawerScreens: Array<DrawerProps> = [
  {
    id: 0,
    icon: 'shopping-bag',
    name: Drawers.Market,
    component: TabStack,
  },
  {
    id: 1,
    icon: 'shopping-cart',
    name: Drawers.Orders,
    component: Orders,
  },
  {
    id: 2,
    icon: 'tag',
    name: Drawers.OfferPromo,
    component: OfferPromo,
  },
  {
    id: 3,
    icon: 'file',
    name: Drawers.PrivacyPolicy,
    component: PrivacyPolicy,
  },
  {
    id: 4,
    icon: 'shield',
    name: Drawers.Settings,
    component: SettingsScreen,
  },
];
