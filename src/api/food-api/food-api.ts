import {Category} from '../../model/category';
import {Food} from '../../model/food';
import {HttpApi} from '../http-api';
import {Food as FoodIn} from './dto/food';
import {Category as CategoryIn} from './dto/category';
import {Storage} from '../../storage/storage';
import {Reciept as RecieptIn} from './dto/reciept';
import {Reciept} from '../../model/reciept';

export const mapToFood = (data: FoodIn, isLiked: boolean) => {
  const categories = data.attributes.categories.data.map(mapToCategories);
  return new Food(data.id, data.attributes.name, data.attributes.price, data.attributes.photo, data.attributes.gallery, categories, isLiked);
};

export const mapToCategories = (data: CategoryIn) => new Category(data.id, data.attributes.name);

const mapToOrders = (data: RecieptIn) =>
  new Reciept(
    data.id,
    data.attributes.address,
    data.attributes.payment,
    data.attributes.phone,
    data.attributes.delivery_method,
    data.attributes.createdAt,
    data.attributes.items,
  );

export class FoodApi {
  public http: HttpApi;
  public storage: Storage;

  public constructor(http: HttpApi, storage: Storage) {
    this.storage = storage;
    this.http = http;
  }

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

  public getShoppingHistory = async (id: number) => {
    const response = await this.http.get<{data: Array<RecieptIn>}>(`/orders?populate=*&filters[users_permissions_user][id][$eq]=${id}`);
    const orders = response.data.map(mapToOrders);
    return orders;
  };
}
