import {ComponentType, Context} from 'react';

export enum ThemeNames {
  Light = 'Light',
  Dark = 'Dark',
}

type ChangeThemeCB = (name: ThemeNames) => void;

export interface ThemeProvider<T> {
  theme: T;
  changeTheme: ChangeThemeCB;
}

export interface ThemeProps<T> {
  theme: T;
  changeTheme: ChangeThemeCB;
}

export type ThemeContext<T> = Context<ThemeProps<T>>;
export type ThemeProviderComponent<T> = ComponentType<ThemeProvider<T>>;
export type createThemes<T> = {
  ThemeProvider: ComponentType<ThemeProvider<T>>;
  useTheme: (overrides?: Object) => ThemeProps<T>;
};

export interface Theme {
  colorScheme: {
    primaryBackground: string;
    primaryBackgroundLight: string;
    primaryBackgroundDark: string;
    primaryText: string;
    secondaryBackground: string;
    shadow: string;
  };
}
