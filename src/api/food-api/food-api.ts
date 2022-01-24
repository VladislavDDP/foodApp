import {Category} from '../../model/category';
import {Food} from '../../model/food';
import {HttpApi} from '../http-api';
import {Food as FoodIn} from './dto/food';
import {Category as CategoryIn} from './dto/category';
import {Storage} from '../../storage/storage';
import {CartFood} from '../../model/cartFood';
import {Orders} from './dto/orders';
import {RecieptDetails} from './dto/recieptDetails';

export const mapToFood = (data: FoodIn, isLiked: boolean) => {
  const categories = data.attributes.categories.data.map(mapToCategories);
  return new Food(data.id, data.attributes.name, data.attributes.price, data.attributes.photo, data.attributes.gallery, categories, isLiked);
};

export const mapToCategories = (data: CategoryIn) => new Category(data.id, data.attributes.name);

const mapFoodOut = (el: CartFood) => ({
  id: el.id,
  qty: el.qty,
  attributes: {
    name: el.name,
    photo: el.photo,
    price: el.price,
    gallery: el.gallery,
  },
});

export class FoodApi {
  public http: HttpApi;
  public storage: Storage;

  public constructor(http: HttpApi, storage: Storage) {
    this.storage = storage;
    this.http = http;
  }

  public getFood = async () => {
    this.http.removeHeader('Authorization');
    const response = await this.http.get<{data: Array<FoodIn>}>('/foods', {params: {populate: '*'}});
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
    const response = await this.http.get<{data: Array<CategoryIn>}>('/categories', {params: {populate: '*'}});
    const categories = response.data.map(mapToCategories);
    return categories;
  };

  public purchaseFood = async (item: RecieptDetails, id: number) => {
    try {
      const items = item.items.map(mapFoodOut);

      const data = {
        data: {
          address: item.address,
          phone: item.phone,
          delivery_method: item.delivery_method,
          payment: item.payment,
          users_permissions_user: id,
          items,
        },
      };

      const response = await this.http.post<Orders>('/orders', data);

      return response.data.id;
    } catch (e) {
      // TODO: handle error
    }
  };
}
