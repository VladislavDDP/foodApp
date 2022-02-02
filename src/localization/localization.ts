import {use, changeLanguage, t} from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './eng.json';
import ru from './rus.json';
import {Languages} from './languages';

export interface LangOptions<T> {
  compatibilityJSON: 'v1' | 'v2' | 'v3' | undefined;
  fallbackLng: Languages;
  resources: {[key in Languages]: {translation: T}};
}

export interface Localisation {
  language: Languages;
  t: (key: string, options?: {[key: string]: string | number}) => string;
  selectLanguage: (langKey: Languages) => void;
}

export class NextLocalisation<T> implements Localisation {
  private currentLanguage: Languages;

  public constructor(options: LangOptions<T>) {
    this.currentLanguage = options.fallbackLng;
    use(initReactI18next).init(options);
  }

  public get language() {
    return this.currentLanguage;
  }

  public t = (key: string, options?: {[key: string]: string | number}) => t(key, options);

  public selectLanguage = (langKey: Languages) => {
    this.currentLanguage = langKey;
    changeLanguage(langKey);
  };
}

export const localisation: Localisation = new NextLocalisation<typeof en>({
  compatibilityJSON: 'v3',
  fallbackLng: Languages.EN,
  resources: {
    [Languages.EN]: {translation: en},
    [Languages.RU]: {translation: ru},
  },
});
