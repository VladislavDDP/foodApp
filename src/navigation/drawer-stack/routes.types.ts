import {OfferPromo} from '../../screens/drawer/OfferPromo.component';
import {Orders} from '../../screens/drawer/Orders.component';
import {PrivacyPolicy} from '../../screens/drawer/PrivacyPolicy.component';
import {Profile} from '../../screens/drawer/Profile.component';
import {Security} from '../../screens/drawer/Security.component';
import {TabStack} from '../tab-navigation/TabStack.component';
import {Drawers} from './drawer.types';

export type DrawerComponents = () => JSX.Element;

export const drawerScreens = [
  {
    id: 0,
    icon: 'shopping-bag',
    name: Drawers.Market,
    component: TabStack,
  },
  {
    id: 1,
    icon: 'user',
    name: Drawers.Profile,
    component: Profile,
  },
  {
    id: 2,
    icon: 'shopping-cart',
    name: Drawers.Orders,
    component: Orders,
  },
  {
    id: 3,
    icon: 'tag',
    name: Drawers.OfferPromo,
    component: OfferPromo,
  },
  {
    id: 4,
    icon: 'file',
    name: Drawers.PrivacyPolicy,
    component: PrivacyPolicy,
  },
  {
    id: 5,
    icon: 'shield',
    name: Drawers.Security,
    component: Security,
  },
];
