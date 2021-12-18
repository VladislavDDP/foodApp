import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Food} from '../../model/foodModel';
import {Screens} from './routes.types';

export type StackParamList = {
  Onboarding: undefined;
  Authentication: undefined;
  DashboardStack: undefined;
  Details: {food: Food};
};

export interface AppNavigatorScreenProps<S extends Screens> extends NativeStackScreenProps<StackParamList, S> {}
