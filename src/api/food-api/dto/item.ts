export interface OrderedItem {
  id: number;
  qty: number;
  attributes: {
    name: string;
    photo: string;
    price: number;
    gallery: Array<string>;
  };
}
