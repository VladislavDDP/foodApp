import {makeAutoObservable} from 'mobx';

import {Storage} from '../storage/storage';
import {Languages} from '../localization/languages';
import {localisation} from '../localization/localization';
import {ThemeNames} from '../theme/ThemeNames';
import {injector} from '../utils/injector/Injector';
import {Configs} from '../config/configs';
import {SettingsService} from '../services/settings.service';
import {Service} from '../services/service';

export class Settings {
  public theme: ThemeNames;
  public language: Languages;

  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);
  private settingsService: SettingsService = injector.get<SettingsService>(Service.Settings);

  public constructor() {
    this.theme = this.settingsService.currentTheme;
    this.language = this.settingsService.currentLanguage;

    makeAutoObservable(this, {}, {autoBind: true});
  }

  public switchTheme = async (name: ThemeNames) => {
    this.theme = name;
    await this.storage.setTheme(name);
  };

  public switchLanguage = async (language: Languages) => {
    await this.storage.setLanguage(language);
    this.settingsService.currentLanguage = language;
    this.language = language;
    localisation.selectLanguage(language);
  };
}
