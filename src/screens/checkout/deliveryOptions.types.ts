export interface DeliveryOption {
  id: number;
  text: string;
}

export enum DeliveryOptionValue {
  DoorDelivery = 'DoorDelivery',
  PickUp = 'PickUp',
}

export const deliveryOptions = [
  {id: 1, text: DeliveryOptionValue.DoorDelivery},
  {id: 2, text: DeliveryOptionValue.PickUp},
];
