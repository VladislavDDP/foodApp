import {makeAutoObservable} from 'mobx';

import {Languages} from '../localization/languages';
import {ThemeNames} from '../theme/ThemeNames';
import {injector} from '../utils/injector/Injector';
import {SettingsService} from '../services/settings.service';
import {Service} from '../services/service';

export class SettingsStore {
  public theme: ThemeNames;
  public language: Languages;

  private settingsService: SettingsService = injector.get<SettingsService>(Service.Settings);

  public constructor() {
    this.theme = this.settingsService.currentTheme;
    this.language = this.settingsService.currentLanguage;

    makeAutoObservable(this, {}, {autoBind: true});
  }

  public switchTheme = async (name: ThemeNames) => {
    await this.settingsService.setCurrentTheme(name);
    this.theme = name;
  };

  public switchLanguage = async (language: Languages) => {
    await this.settingsService.setCurrentLanguage(language);
    this.language = language;
  };
}
