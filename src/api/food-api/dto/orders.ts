export interface Orders {
  data: {
    id: number;
    attributes: {
      address: string;
      phone: string;
      items: Array<{
        id: number;
        qty: number;
        attributes: {
          name: string;
          photo: string;
          price: number;
          gallery: Array<string>;
        };
      }>;
      delivery_method: string;
      payment: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  meta: {};
}
