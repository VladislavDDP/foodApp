import {OrderedItem} from './item';

export interface Orders {
  id: number;
  attributes: {
    address: string;
    phone: string;
    items: Array<OrderedItem>;
    delivery_method: string;
    payment: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
