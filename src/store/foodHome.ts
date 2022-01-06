import {makeAutoObservable} from 'mobx';

import {Food} from '../model/foodModel';

export class FoodHome {
  public foodItems: Array<Food> = [];

  public constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  public async getFoodByCategory() {
    const response = await fetch('https://rn-delivery-api.herokuapp.com/api/foods?populate=*');
    const food = await response.json();
  }
}
