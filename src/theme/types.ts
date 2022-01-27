import {ComponentType, Context} from 'react';

import {ThemeNames} from './ThemeNames';

type ChangeThemeCB = (name: ThemeNames) => void;

export interface ThemeProps<T> {
  theme: T;
  changeTheme: ChangeThemeCB;
}

export type ThemeContext<T> = Context<ThemeProps<T>>;
export type ThemeProviderComponent<T> = ComponentType<ThemeProps<T>>;
export type createThemes<T> = {
  ThemeProvider: ComponentType<ThemeProps<T>>;
  useTheme: (overrides?: Object) => ThemeProps<T>;
};
