import {CartFood} from '../../../model/cartFood';
import {DeliveryType} from '../../../screens/checkout/deliveryOptions.types';
import {PaymentType} from '../../../screens/drawer/profile/paymentOption.types';

export interface RecieptDetails {
  address: string;
  phone: string;
  delivery_method: DeliveryType;
  payment: PaymentType;
  items: Array<CartFood>;
}
