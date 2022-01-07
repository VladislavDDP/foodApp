import AsyncStorage from '@react-native-community/async-storage';

import {Food} from '../model/foodModel';

class Storage {
  private likedItemsKey: string = 'likedFood';
  private likedFood: Array<Food> = [];

  public getLikedFood = async () => {
    const response = await AsyncStorage.getItem(this.likedItemsKey);
    this.likedFood = response ? JSON.parse(response) : [];
    return this.likedFood;
  };

  public addToFavourite = (item: Food) => {
    this.likedFood.push(item);
    AsyncStorage.setItem(this.likedItemsKey, JSON.stringify(this.likedFood));
  };

  public removeLike = async (id: number) => {
    const filteredFood = this.likedFood.filter((item: Food) => item.id !== id);
    AsyncStorage.setItem(this.likedItemsKey, JSON.stringify(filteredFood));
  };
}

export const storage = new Storage();
