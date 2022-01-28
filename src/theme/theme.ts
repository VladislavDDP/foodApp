import {createThemes} from './createThemes';
import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';
import {Theme} from './Theme.types';
import {ThemeNames} from './ThemeNames';

export const themes: {[name in ThemeNames]: Theme} = {
  [ThemeNames.Dark]: darkTheme,
  [ThemeNames.Light]: lightTheme,
};

export const {ThemeProvider, useTheme} = createThemes(darkTheme);
