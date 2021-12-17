import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screens} from './routes.types';

export type StackParamList = {
  Onboarding: undefined;
  Authentication: undefined;
  DashboardStack: undefined;
  Dashboard: undefined;
};

export interface AppNavigatorScreenProps<S extends Screens> extends NativeStackScreenProps<StackParamList, S> {}
