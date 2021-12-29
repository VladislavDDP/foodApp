import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DrawerParamList = {
  Market: undefined;
  Profile: undefined;
  Orders: undefined;
  OfferPromo: undefined;
  PrivacyPolicy: undefined;
  Security: undefined;
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
