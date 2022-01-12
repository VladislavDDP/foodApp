import {Category} from './category';

export interface Food {
  id: number;
  attributes: {
    name: string;
    price: number;
    photo: string;
    gallery: Array<string>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories: {
      data: Array<Category>;
    };
  };
}
