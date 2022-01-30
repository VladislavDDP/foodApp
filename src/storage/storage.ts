import AsyncStorage from '@react-native-community/async-storage';

import {Languages} from '../localization/languages';
import {Food} from '../model/food';
import {User} from '../model/user';
import {ThemeNames} from '../theme/ThemeNames';
import {StorageKeys} from './asyncKeys';

export class Storage {
  public addAuthenticationData = async (email: string, password: string) => {
    await AsyncStorage.setItem(StorageKeys.AuthData, JSON.stringify({email, password}));
  };

  public addUserData = async (user: User) => AsyncStorage.setItem(StorageKeys.UserData, JSON.stringify(user));

  public removeAuthenticationData = async () => {
    await AsyncStorage.removeItem(StorageKeys.AuthData);
  };

  public removeUserData = async () => {
    await AsyncStorage.removeItem(StorageKeys.UserData);
  };

  public getAuthData = async (): Promise<{email: string; password: string}> => {
    const response = await AsyncStorage.getItem(StorageKeys.AuthData);
    return response ? JSON.parse(response) : {};
  };

  public getLikedFood = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.LikedItems);
    return response ? JSON.parse(response) : [];
  };

  public getUserData = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.UserData);
    return response ? JSON.parse(response) : null;
  };

  public getTheme = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.ThemeName);
    return response ? response : '';
  };

  public setTheme = async (name: ThemeNames) => {
    await AsyncStorage.setItem(StorageKeys.ThemeName, name);
  };

  public getLanguage = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.Language);
    return response ? response : '';
  };

  public setLanguage = async (language: Languages) => {
    await AsyncStorage.setItem(StorageKeys.Language, language);
  };

  public addToFavourite = async (item: Food) => {
    const items = await this.getLikedFood();
    await AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify([item, ...items]));
  };

  public removeLike = async (id: number) => {
    const response = await this.getLikedFood();
    const items = response.filter((item: Food) => item.id !== id);
    await AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify(items));
  };

  public clearStorage = async () => {
    await AsyncStorage.clear();
  };
}
