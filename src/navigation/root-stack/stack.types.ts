import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Food} from '../../model/food';
import {Reciept} from '../../model/reciept';
import {Screens} from './routes.types';

export type StackParamList = {
  [Screens.AuthFlowStack]: undefined;
  [Screens.DrawerStack]: undefined;
  [Screens.Search]: undefined;
  [Screens.Details]: {item: Food};
  [Screens.Cart]: undefined;
  [Screens.Checkout]: undefined;
  [Screens.Reciept]: {item: Reciept};
};

export interface AppNavigatorScreenProps<S extends Screens> extends NativeStackScreenProps<StackParamList, S> {}
