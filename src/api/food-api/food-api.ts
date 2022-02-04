import {Category} from '../../model/category';
import {Food} from '../../model/food';
import {HttpApi} from '../http-api';
import {Food as FoodIn} from './dto/food';
import {Category as CategoryIn} from './dto/category';
import {Storage} from '../../storage/storage';
import {CartFood} from '../../model/cartFood';
import {Orders} from './dto/orders';
import {OrderDetails} from '../../model/orderDetails';
import {injector} from '../../utils/injector/Injector';
import {Config} from '../../config/config';

const unauthorizedError = 401;

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
  public http: HttpApi = injector.get<HttpApi>(Config.Http);
  public storage: Storage = injector.get<Storage>(Config.AsyncMemory);

  public getFood = async () => {
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

  public purchaseFood = async (item: OrderDetails, id: number) => {
    try {
      const items = item.items.map(mapFoodOut);

      const data = {
        data: {
          address: item.address,
          phone: item.phone,
          delivery_method: item.deliveryMethod,
          payment: item.payment,
          users_permissions_user: id,
          items,
        },
      };

      const response = await this.http.post<Orders>('/orders', data);

      return response.id;
    } catch (e) {
      if (e.response.status === unauthorizedError) {
        throw new Error('User not auth');
      } else {
        throw new Error('Unknown error');
      }
    }
  };
}
