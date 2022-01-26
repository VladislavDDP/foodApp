import {createThemes} from './createThemes';
import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';
import {Theme, ThemeNames} from './types';

export const themes: {[name in ThemeNames]: Theme} = {
  [ThemeNames.Dark]: darkTheme,
  [ThemeNames.Light]: lightTheme,
};

export const {ThemeProvider, useTheme} = createThemes(darkTheme);
