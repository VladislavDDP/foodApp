import {Configs} from '../../config/configs';
import {Languages} from '../../localization/languages';
import {localisation} from '../../localization/localization';
import {Storage} from '../../storage/storage';
import {ThemeNames} from '../../theme/ThemeNames';
import {injector} from '../../utils/injector/Injector';

export class SettingsService {
  public currentTheme: ThemeNames = ThemeNames.Light;

  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

  public initSettings = async () => {
    const themeResponse: string = await this.storage.getTheme();
    if (themeResponse) {
      this.currentTheme = ThemeNames[themeResponse as ThemeNames];
    }

    const languageResponse: string = await this.storage.getLanguage();
    if (languageResponse) {
      localisation.selectLanguage(languageResponse as Languages);
    }
  };
}
