import React from 'react';

import {History} from '../../screens/dashboard/history/History.component';
import {Home} from '../../screens/dashboard/home/Home.component';
import {Favourites} from '../../screens/dashboard/favourites/Favourites.component';
import {Profile} from '../../screens/drawer/profile/Profile.component';
import {Screens} from '../root-stack/routes.types';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';

export type TabComponents = React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> | (() => JSX.Element);

export interface TabProps {
  id: number;
  name: string;
  icon: string;
  component: TabComponents;
}

export const tabScreens: Array<TabProps> = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    component: Home,
  },
  {
    id: 2,
    name: 'Favourites',
    icon: 'heart-o',
    component: Favourites,
  },
  {
    id: 3,
    name: 'Profile',
    icon: 'user-o',
    component: Profile,
  },
  {
    id: 4,
    name: 'History',
    icon: 'history',
    component: History,
  },
];
