import {makeAutoObservable} from 'mobx';

import {Storage} from '../storage/storage';
import {Languages} from '../localization/languages';
import {localisation} from '../localization/localization';
import {ThemeNames} from '../theme/ThemeNames';
import {injector} from '../utils/injector/Injector';
import {Config} from '../config/config';

export class Settings {
  public theme: ThemeNames = ThemeNames.Light;
  public language: Languages = Languages.EN;

  private storage: Storage = injector.get<Storage>(Config.AsyncMemory);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public loadTheme = async () => {
    const response: string = await this.storage.getTheme();
    if (response) {
      this.theme = ThemeNames[response as ThemeNames];
      return response as ThemeNames;
    }
  };

  public switchTheme = async (name: ThemeNames) => {
    this.theme = name;
    await this.storage.setTheme(name);
  };

  public loadLanguage = async () => {
    const response: string = await this.storage.getLanguage();
    if (response) {
      this.language = Languages[response as Languages];
      localisation.selectLanguage(this.language);
    }
  };

  public switchLanguage = async (language: Languages) => {
    this.language = language;
    localisation.selectLanguage(language);
    await this.storage.setLanguage(language);
  };
}
