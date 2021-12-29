import {History} from '../../screens/dashboard/history/History.component';
import {Home} from '../../screens/dashboard/home/Home.component';
import {Like} from '../../screens/dashboard/like/Like.component';
import {Screens} from '../root-stack/routes.types';
import {AppNavigatorScreenProps} from '../root-stack/stack.types';

export type TabComponents = React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> | (() => JSX.Element);

export const tabScreens = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    component: Home,
  },
  {
    id: 2,
    name: 'Like',
    icon: 'heart',
    component: Like,
  },
  {
    id: 3,
    name: 'History',
    icon: 'history',
    component: History,
  },
];
