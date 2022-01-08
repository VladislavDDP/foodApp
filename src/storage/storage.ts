import AsyncStorage from '@react-native-community/async-storage';

import {CartFood} from '../model/cartFoodModel';
import {Food} from '../model/foodModel';
import {StorageKeys} from './asyncKeys';

class Storage {
  private likedFood: Array<Food> = [];

  public constructor() {
    this.getLikedFood();
  }

  public getLikedFood = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.LikedItems);
    this.likedFood = response ? JSON.parse(response) : [];
    return this.likedFood;
  };

  public getShoppingHistory = async () => {
    const response = await AsyncStorage.getItem(StorageKeys.ShoppingHistory);
    return response ? JSON.parse(response) : '';
  };

  public addToFavourite = (item: Food) => {
    this.likedFood.push(item);
    AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify(this.likedFood));
  };

  public removeLike = async (id: number) => {
    this.likedFood = this.likedFood.filter((item: Food) => item.id !== id);
    AsyncStorage.setItem(StorageKeys.LikedItems, JSON.stringify(this.likedFood));
  };

  public saveShoppingHistory = (items: Array<CartFood>) => {
    AsyncStorage.setItem(StorageKeys.ShoppingHistory, JSON.stringify(items));
  };
}

export const storage = new Storage();
