import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DrawerParamList = {
  [Drawers.Market]: undefined;
  [Drawers.Orders]: undefined;
  [Drawers.OfferPromo]: undefined;
  [Drawers.PrivacyPolicy]: undefined;
  [Drawers.Settings]: undefined;
};

export enum Drawers {
  Market = 'Market',
  Orders = 'Orders',
  OfferPromo = 'OfferPromo',
  PrivacyPolicy = 'PrivacyPolicy',
  Settings = 'Settings',
}

export interface DrawerNavigationProps<S extends Drawers> extends NativeStackScreenProps<DrawerParamList, S> {}
