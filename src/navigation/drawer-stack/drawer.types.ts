import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DrawerParamList = {
  [Drawers.Market]: undefined;
  [Drawers.Profile]: undefined;
  [Drawers.Orders]: undefined;
  [Drawers.OfferPromo]: undefined;
  [Drawers.PrivacyPolicy]: undefined;
  [Drawers.Security]: undefined;
};

export enum Drawers {
  Market = 'Market',
  Profile = 'Profile',
  Orders = 'Orders',
  OfferPromo = 'OfferPromo',
  PrivacyPolicy = 'PrivacyPolicy',
  Security = 'Security',
}

export interface DrawerNavigationProps<S extends Drawers> extends NativeStackScreenProps<DrawerParamList, S> {}
