export interface PaymentOption {
  id: number;
  text: string;
  icon: string;
  color: string;
}

export const paymentOptions: Array<PaymentOption> = [
  {id: 1, icon: 'credit-card', text: 'Card', color: 'orange'},
  {id: 2, icon: 'bank', text: 'Bank account', color: 'violet'},
  {id: 3, icon: 'paypal', text: 'Paypal', color: 'blue'},
];
