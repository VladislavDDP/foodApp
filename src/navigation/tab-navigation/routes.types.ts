import React from 'react';

import {History} from '../../screens/dashboard/history/History.component';
import {Home} from '../../screens/dashboard/home/Home.component';
import {Favourites} from '../../screens/dashboard/favourites/Favourites.component';
import {ProfileScreen} from '../../screens/drawer/profile/Profile.component';
import {Screens} from '../root-stack/routes.types';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';

export type TabComponents = React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> | (() => JSX.Element);

export enum Tabs {
  home = 'Home',
  favourites = 'Favourites',
  profile = 'Profile',
  history = 'History',
}

export interface TabProps {
  id: number;
  name: Tabs;
  icon: string;
  component: TabComponents;
}

export const tabScreens: Array<TabProps> = [
  {
    id: 1,
    name: Tabs.home,
    icon: 'home',
    component: Home,
  },
  {
    id: 2,
    name: Tabs.favourites,
    icon: 'heart-o',
    component: Favourites,
  },
  {
    id: 3,
    name: Tabs.profile,
    icon: 'user-o',
    component: ProfileScreen,
  },
  {
    id: 4,
    name: Tabs.history,
    icon: 'history',
    component: History,
  },
];
