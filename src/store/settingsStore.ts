import {makeAutoObservable} from 'mobx';

import {Languages} from '../localization/languages';
import {ThemeNames} from '../theme/ThemeNames';
import {injector} from '../utils/injector/Injector';
import {SettingsService} from '../services/settings.service';
import {Service} from '../services/service';

export class SettingsStore {
  private settingsService: SettingsService = injector.get<SettingsService>(Service.Settings);

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public get theme() {
    return this.settingsService.currentTheme;
  }

  public get language() {
    return this.settingsService.currentLanguage;
  }

  public switchTheme = async (name: ThemeNames) => {
    await this.settingsService.setCurrentTheme(name);
  };

  public switchLanguage = async (language: Languages) => {
    await this.settingsService.setCurrentLanguage(language);
  };
}
