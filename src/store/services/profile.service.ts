import {DeliveryType} from '../../model/deliveryType';
import {PaymentType} from '../../model/PaymentType';

export class ProfileService {
  public username: string = '';
  public email: string = '';
  public address: string = 'Kyiv';
  public phone: string = '+380956089898';
  public paymentOption: PaymentType = PaymentType.Card;
  public deliveryOption: DeliveryType = DeliveryType.DoorDelivery;
}
