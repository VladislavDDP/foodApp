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
import {Configs} from '../../config/configs';
import {Reciept} from '../../model/reciept';
import {RecieptItem} from '../../model/recieptItem';
import {OrderedItem} from './dto/item';
import {RecieptFood} from '../../model/recieptFood';

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
    categories: el.categories.map((category: Category) => ({id: category.id, name: category.name})),
  },
});

const mapToRecieptItem = (item: OrderedItem) =>
  new RecieptItem(
    item.id,
    item.qty,
    new RecieptFood(item.attributes.name, item.attributes.photo, item.attributes.price, item.attributes.gallery, item.attributes.categories),
  );

export class FoodApi {
  public categories: Array<Category> = [];

  private http: HttpApi = injector.get<HttpApi>(Configs.Http);
  private storage: Storage = injector.get<Storage>(Configs.AsyncMemory);

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
    this.categories = categories;
    return categories;
  };

  public purchaseFood = async (item: OrderDetails, id: number) => {
    try {
      const items = item.items.map(mapFoodOut);

      const body = {
        data: {
          address: item.address,
          phone: item.phone,
          delivery_method: item.deliveryMethod,
          payment: item.payment,
          users_permissions_user: id,
          items,
        },
      };

      const {data} = await this.http.post<Orders>('/orders', body);
      const responseItems = data.attributes.items.map(mapToRecieptItem);
      const receipt = new Reciept(
        data.id,
        data.attributes.address,
        data.attributes.payment,
        data.attributes.phone,
        data.attributes.delivery_method,
        data.attributes.createdAt,
        responseItems,
      );
      return receipt;
    } catch (e) {
      if (e.response.status === unauthorizedError) {
        throw new Error('User not auth');
      } else {
        throw new Error('Unknown error');
      }
    }
  };
}
