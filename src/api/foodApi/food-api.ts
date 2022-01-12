import {Category} from '../../model/category';
import {Food} from '../../model/food';
import {HttpApi} from '../http-api';
import {Food as FoodIn} from './dto/food';
import {Category as CategoryIn} from './dto/category';
import {storage} from '../../storage/storage';

export const mapToFood = (data: FoodIn, isLiked: boolean) => {
  const categories = data.attributes.categories.data.map(mapToCategories);
  return new Food(data.id, data.attributes.name, data.attributes.price, data.attributes.photo, data.attributes.gallery, categories, isLiked);
};

export const mapToCategories = (data: CategoryIn) => new Category(data.id, data.attributes.name);

export class FoodApi {
  public http: HttpApi;
  private baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';

  public constructor(http: HttpApi) {
    this.http = http;
    this.http.setBaseURL(this.baseURL);
  }

  public getFood = async () => {
    const response = await this.http.get<{data: Array<FoodIn>}>('/foods?populate=*');
    const favoriteFood = await storage.getLikedFood();

    const food = response.data.map((value: FoodIn) =>
      mapToFood(
        value,
        favoriteFood.some((item: Food) => item.id === value.id),
      ),
    );

    return food;
  };

  public getCategories = async () => {
    const response = await this.http.get<{data: Array<CategoryIn>}>('/categories?populate=*');
    const categories = response.data.map(mapToCategories);
    return categories;
  };
}
