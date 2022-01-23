import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {Modal, Text} from 'react-native';
import {View} from 'react-native-animatable';

import {CustomButton} from '../../components/button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './checkout.styles';
import {DeliveryDetails} from './delivery-details-container/DeliveryDetails.component';
import {DeliveryType} from './deliveryOptions.types';
import {ModalCheckout} from './modal-checkout/ModalCheckout.component';
import {TotalPrice} from './total-price/TotalPrice.component';
import {useStore} from '../../store/store';
import {LoadingScreen} from '../../components/loading-screen/LoadingScreen.component';
import {DeliveryOptionsBox} from './delivery-options-box/DeliveryOptionsBox.component';

interface Props extends AppNavigatorScreenProps<Screens.Checkout> {}

export const Checkout: React.FC<Props> = observer(({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {foodStore, cart, profile} = useStore();

  useEffect(() => {
    profile.getUserData();
  });

  const approvePayment = async () => {
    try {
      setLoading(true);
      setModalVisible(false);
      const item = {
        address: profile.address,
        phone: profile.phone,
        delivery_method: profile.deliveryOption,
        payment: profile.paymentOption,
        items: cart.cartItems,
      };
      const response = await foodStore.appendHistory(item);
      if (response) {
        cart.clearCart();
        navigation.replace(Screens.DrawerStack);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (e) {
      // TODO: catch the error
    }
  };

  const setVisable = () => setModalVisible(true);

  const onRequestClose = () => setModalVisible(!modalVisible);

  const setOption = (option: DeliveryType) => profile.setDeliveryMethod(option);

  if (loading) {
    return <LoadingScreen title="Ordering..." />;
  }

  return (
    <View style={styles.container}>
      <CustomHeader title="Checkout" onPress={navigation.goBack} />
      <View style={styles.wrapper}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
          <ModalCheckout approvePayment={approvePayment} setVisable={setModalVisible} />
        </Modal>
        <Text style={styles.title}>Delivery</Text>
        <DeliveryDetails />
        <DeliveryOptionsBox selectedOption={profile.deliveryOption} setOption={setOption} />
        <TotalPrice totalCartPrice={cart.totalCartPrice} />
      </View>
      <CustomButton text="Proceed to payment" buttonStyle={styles.button} labelStyle={styles.label} onPress={setVisable} />
    </View>
  );
});
