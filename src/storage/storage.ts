import AsyncStorage from '@react-native-community/async-storage';

import {Food} from '../model/food';
import {User} from '../model/user';
import {StorageKeys} from './asyncKeys';

export class Storage {
  public addAuthenticationKey = async (jwtKey: string) => AsyncStorage.setItem(StorageKeys.JwtKey, jwtKey);

  public addUserData = async (user: User) => AsyncStorage.setItem(StorageKeys.UserData, JSON.stringify(user));

  public removeAuthenticationKey = async () => {
    await AsyncStorage.removeItem(StorageKeys.JwtKey);
  };

  public removeUserData = async () => {
    await AsyncStorage.removeItem(StorageKeys.UserData);
  };

  public getToken = async () => AsyncStorage.getItem(StorageKeys.JwtKey);

  public getLikedFood = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.LikedItems);
    return response ? JSON.parse(response) : [];
  };

  public getUserData = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.UserData);
    return response ? JSON.parse(response) : null;
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
