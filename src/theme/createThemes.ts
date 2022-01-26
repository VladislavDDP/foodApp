import {createContext, useContext} from 'react';

import {ThemeNames} from './types';
import {createThemeProvider} from './createThemeProvider';

const obj = {name: ''};

export const createThemes = <T extends Object>(defaultTheme: T) => {
  const ThemeContext = createContext({
    theme: defaultTheme,
    changeTheme: (name: ThemeNames) => {
      obj.name = name;
    },
  });

  const ThemeProvider = createThemeProvider(defaultTheme, ThemeContext);
  const useTheme = (overrides?: Object) => ({...useContext(ThemeContext), ...overrides});

  return {ThemeProvider, useTheme};
};
