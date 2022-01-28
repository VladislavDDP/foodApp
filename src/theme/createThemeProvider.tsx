import React from 'react';
import {ThemeContext, ThemeProviderComponent} from './types';

const emptyCallback = () => null;

export const createThemeProvider =
  <T extends Object>(theme: T, Context: ThemeContext<T>): ThemeProviderComponent<T> =>
  ({children, ...props}) =>
    <Context.Provider value={{theme: props.theme || theme, changeTheme: props.changeTheme || emptyCallback}}>{children}</Context.Provider>;
