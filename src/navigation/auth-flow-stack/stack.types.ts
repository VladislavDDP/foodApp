import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthFlowScreens} from './routes.types';

export type AuthFlowParamList = {
  [AuthFlowScreens.Onboarding]: undefined;
  [AuthFlowScreens.Authentication]: undefined;
};

export interface AuthFlowNavigatorScreenProps<S extends AuthFlowScreens> extends NativeStackScreenProps<AuthFlowParamList, S> {}
