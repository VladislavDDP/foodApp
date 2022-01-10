import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Food} from '../../model/foodModel';
import {Screens} from './routes.types';

export type StackParamList = {
  AuthFlowStack: undefined;
  DrawerStack: undefined;
  Search: undefined;
  Details: {item: Food};
  Cart: undefined;
  Checkout: undefined;
};

export interface AppNavigatorScreenProps<S extends Screens> extends NativeStackScreenProps<StackParamList, S> {}
