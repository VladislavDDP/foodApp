import {makeAutoObservable} from 'mobx';

import {Storage} from '../storage/storage';
import {ThemeNames} from '../theme/types';

export class Settings {
  public theme: ThemeNames = ThemeNames.Light;

  private storage: Storage;

  public constructor(storage: Storage) {
    this.storage = storage;
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
}
