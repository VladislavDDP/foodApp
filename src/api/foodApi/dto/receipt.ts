export interface Receipt {
  id: number;
  attributes: {
    address: string;
    phone: string;
    items: Array<{
      id: number;
      name: string;
      photo: string;
      price: number;
      gallery: Array<string>;
      categories: Array<{id: number; name: string}>;
    }>;
    delivery_method: string;
    payment: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    users_permissions_user: {
      data: Array<{
        id: number;
        attributes: {
          username: string;
          email: string;
          provider: string;
          confirmed: string;
          blocked: string;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    };
  };
}
