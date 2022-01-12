import AsyncStorage from '@react-native-community/async-storage';

import {CartFood} from '../model/cartFood';
import {Food} from '../model/food';
import {StorageKeys} from './asyncKeys';

export class Storage {
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
    AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify([item, ...items]));
  };

  public removeLike = async (id: number) => {
    const response = await this.getLikedFood();
    const items = response.filter((item: Food) => item.id !== id);
    AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify(items));
  };

  public updateShoppingHistory = async (newItems: Array<CartFood>) => {
    const items = await this.getShoppingHistory();
    AsyncStorage.setItem(StorageKeys.ShoppingHistory, JSON.stringify([...newItems, ...items]));
  };

  public removeFromShoppingHistory = async (id: number) => {
    const response = await this.getShoppingHistory();
    const filteredItems = response.filter((item: Food) => item.id !== id);
    AsyncStorage.setItem(StorageKeys.ShoppingHistory, JSON.stringify(filteredItems));
  };

  public clearStorage = () => {
    AsyncStorage.clear();
  };
}
