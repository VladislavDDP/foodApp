import {Category} from '../../model/category';
import {Food} from '../../model/food';
import {HttpApi} from '../http-api';
import {Food as FoodIn} from './dto/food';
import {Category as CategoryIn} from './dto/category';
import {Storage} from '../../storage/storage';
import {Auth} from './dto/auth';

export const mapToFood = (data: FoodIn, isLiked: boolean) => {
  const categories = data.attributes.categories.data.map(mapToCategories);
  return new Food(data.id, data.attributes.name, data.attributes.price, data.attributes.photo, data.attributes.gallery, categories, isLiked);
};

export const mapToCategories = (data: CategoryIn) => new Category(data.id, data.attributes.name);

export class FoodApi {
  public http: HttpApi;
  public storage: Storage;
  private baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';

  public constructor(http: HttpApi, storage: Storage) {
    this.storage = storage;
    this.http = http;
    this.http.setBaseURL(this.baseURL);
  }

  public authorizeUser = async (email: string, password: string) => {
    try {
      const response = await this.http.post<Auth>('/auth/local', {
        identifier: email,
        password: password,
      });
      return response;
    } catch (e) {
      if ((e as string) === 'Request failed with status code 400') {
        throw new Error('Invalid email or password');
      } else {
        throw new Error('Unknown error');
      }
    }
  };

  public getFood = async () => {
    const response = await this.http.get<{data: Array<FoodIn>}>('/foods?populate=*');
    const favoriteFood = await this.storage.getLikedFood();

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
