export interface PaymentOption {
  id: number;
  text: string;
  icon: string;
  color: string;
}

export enum PaymentOptionValue {
  Card = 'Card',
  BankAccount = 'BankAccount',
  Paypal = 'Paypal',
}

export const paymentOptions: Array<PaymentOption> = [
  {id: 1, icon: 'credit-card', text: PaymentOptionValue.Card, color: 'orange'},
  {id: 2, icon: 'bank', text: PaymentOptionValue.BankAccount, color: 'violet'},
  {id: 3, icon: 'paypal', text: PaymentOptionValue.Paypal, color: 'blue'},
];
