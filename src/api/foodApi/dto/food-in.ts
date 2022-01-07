import {RowCategory} from './categories-in';

export interface RowFood {
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
      data: Array<RowCategory>;
    };
  };
}
