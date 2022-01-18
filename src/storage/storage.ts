import AsyncStorage from '@react-native-community/async-storage';

import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {StorageKeys} from './asyncKeys';

export class Storage {
  public addAuthenticationKey = async (jwtKey: string) => AsyncStorage.setItem(StorageKeys.JwtKey, jwtKey);

  public removeAuthenticationKey = async () => {
    await AsyncStorage.removeItem(StorageKeys.JwtKey);
  };

  public getToken = async () => AsyncStorage.getItem(StorageKeys.JwtKey);

  public getLikedFood = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.LikedItems);
    return response ? JSON.parse(response) : [];
  };

  public getShoppingHistory = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.ShoppingHistory);
    return response ? JSON.parse(response) : [];
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

  public updateShoppingHistory = async (newItems: Array<CartFood>) => {
    const items = await this.getShoppingHistory();
    await AsyncStorage.setItem(StorageKeys.ShoppingHistory, JSON.stringify([...newItems, ...items]));
  };

  public removeFromShoppingHistory = async (id: number) => {
    const response = await this.getShoppingHistory();
    const filteredItems = response.filter((item: Food) => item.id !== id);
    await AsyncStorage.setItem(StorageKeys.ShoppingHistory, JSON.stringify(filteredItems));
  };

  public clearStorage = async () => {
    await AsyncStorage.clear();
  };
}
