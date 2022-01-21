import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {Modal, Text} from 'react-native';
import {View} from 'react-native-animatable';

import {CustomButton} from '../../components/button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {RadioButton} from '../../components/radio-button/RadioButton.components';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './checkout.styles';
import {DeliveryDetails} from './delivery-details-container/DeliveryDetails.component';
import {DeliveryType} from './deliveryOptions.types';
import {ModalCheckout} from './modal-checkout/ModalCheckout.component';
import {TotalPrice} from './total-price/TotalPrice.component';
import {useStore} from '../../store/store';

interface Props extends AppNavigatorScreenProps<Screens.Checkout> {}

export const Checkout: React.FC<Props> = observer(({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {foodStore, cart, profile} = useStore();

  useEffect(() => {
    profile.setUserData();
  }, []);

  const approvePayment = () => {
    setModalVisible(false);
    const item = {
      address: profile.address,
      phone: profile.phone,
      delivery_method: profile.deliveryOption,
      payment: profile.paymentOption,
      items: cart.cartItems,
    };
    foodStore.appendHistory(item);
    cart.clearCart();
    navigation.replace(Screens.DrawerStack);
  };

  const setVisable = () => setModalVisible(true);

  const onRequestClose = () => setModalVisible(!modalVisible);

  const setOption = (option: DeliveryType) => profile.setDeliveryMethod(option);

  return (
    <View style={styles.container}>
      <CustomHeader title="Checkout" onPress={navigation.goBack} />
      <View style={styles.wrapper}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
          <ModalCheckout approvePayment={approvePayment} setVisable={setModalVisible} />
        </Modal>
        <Text style={styles.title}>Delivery</Text>
        <DeliveryDetails />
        <View>
          <Text style={styles.sectionTitle}>Delivery method</Text>
          <View style={styles.deliveryMethodContainer}>
            <RadioButton
              text={DeliveryType.DoorDelivery}
              isSelected={profile.deliveryOption === DeliveryType.DoorDelivery}
              shouldSeparate
              onSelect={() => setOption(DeliveryType.DoorDelivery)}
            />
            <RadioButton
              text={DeliveryType.PickUp}
              isSelected={profile.deliveryOption === DeliveryType.PickUp}
              onSelect={() => setOption(DeliveryType.PickUp)}
            />
          </View>
        </View>
        <TotalPrice totalCartPrice={cart.totalCartPrice} />
      </View>
      <CustomButton text="Proceed to payment" buttonStyle={styles.button} labelStyle={styles.label} onPress={setVisable} />
    </View>
  );
});
