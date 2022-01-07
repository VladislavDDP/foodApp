import {Category} from '../../model/categoryModel';
import {Food} from '../../model/foodModel';
import {storage} from '../../storage/storage';
import {HttpApi} from '../http-api';
import {RowCategory} from './dto/categories-in';
import {RowFood} from './dto/food-in';

export const mapToFood = (data: RowFood) => {
  const categories = data.attributes.categories.data.map(mapToCategories);
  return new Food(data.id, data.attributes.name, data.attributes.price, data.attributes.photo, data.attributes.gallery, categories, false);
};

export const mapToCategories = (data: RowCategory) => new Category(data.id, data.attributes.name);

export class FoodApi {
  public http: HttpApi;
  private baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';

  public constructor(http: HttpApi) {
    this.http = http;
    this.http.setBaseURL(this.baseURL);
  }

  public getFood = async () => {
    const response = await this.http.get<{data: Array<RowFood>}>('/foods?populate=*', {params: {}});

    const food = response.data.map(mapToFood);
    const favoriteFood = (await storage.getLikedFood()).map((item: Food) => item.id);

    food.forEach((item: Food) => {
      if (favoriteFood.includes(item.id)) {
        item.isLiked = true;
      }
    });
    return food;
  };

  public getCategories = async () => {
    const response = await this.http.get<{data: Array<RowCategory>}>('/categories?populate=*', {params: {}});
    const categories = response.data.map(mapToCategories);
    return categories;
  };
}

const httpApi = new HttpApi();
export const foodApi = new FoodApi(httpApi);
