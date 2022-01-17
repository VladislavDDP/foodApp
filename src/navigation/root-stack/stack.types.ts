import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Food} from '../../model/food';
import {Reciept} from '../../model/reciept';
import {Screens} from './routes.types';

export type StackParamList = {
  AuthFlowStack: undefined;
  DrawerStack: undefined;
  Search: undefined;
  Details: {item: Food};
  Cart: undefined;
  Checkout: undefined;
  Reciept: {item: Reciept};
};

export interface AppNavigatorScreenProps<S extends Screens> extends NativeStackScreenProps<StackParamList, S> {}
