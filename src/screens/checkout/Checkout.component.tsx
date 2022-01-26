import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {Modal} from 'react-native';
import {View} from 'react-native-animatable';

import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './checkout.styles';
import {DeliveryDetails} from './delivery-details-container/DeliveryDetails.component';
import {DeliveryType} from '../../model/deliveryType';
import {ModalCheckout} from './modal-checkout/ModalCheckout.component';
import {TotalPrice} from './total-price/TotalPrice.component';
import {useStore} from '../../store/store';
import {LoadingScreen} from '../../components/loading-screen/LoadingScreen.component';
import {DeliveryOptionsBox} from './delivery-options-box/DeliveryOptionsBox.component';
import {useTheme} from '../../theme/theme';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';

export const Checkout: React.FC<AppNavigatorScreenProps<Screens.Checkout>> = observer(({navigation}) => {
  const {theme} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {foodStore, cart, profile} = useStore();

  useEffect(() => {
    profile.getUserData();
  });

  const approvePayment = async () => {
    setLoading(true);
    setModalVisible(false);

    const item = {
      address: profile.address,
      phone: profile.phone,
      deliveryMethod: profile.deliveryOption,
      payment: profile.paymentOption,
      items: cart.cartItems,
    };

    try {
      const response = await foodStore.appendHistory(item);
      if (response) {
        cart.clearCart();
        navigation.replace(Screens.DrawerStack);
      }
    } catch (e) {
      // TODO: catch the error
    } finally {
      setLoading(false);
    }
  };

  const setVisable = () => setModalVisible(true);

  const onRequestClose = () => setModalVisible(!modalVisible);

  const setOption = (option: DeliveryType) => profile.setDeliveryMethod(option);

  if (loading) {
    return <LoadingScreen title="Ordering..." />;
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.colorScheme.primaryBackgroundLight}]}>
      <CustomHeader title="Checkout" onPress={navigation.goBack} />
      <View style={styles.wrapper}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
          <ModalCheckout approvePayment={approvePayment} setVisable={setModalVisible} />
        </Modal>
        <TextWrapper style={styles.title}>Delivery</TextWrapper>
        <DeliveryDetails />
        <DeliveryOptionsBox selectedOption={profile.deliveryOption} setOption={setOption} />
        <TotalPrice totalCartPrice={cart.totalCartPrice} />
      </View>
      <CustomButton text="Proceed to payment" buttonStyle={styles.button} labelStyle={styles.label} onPress={setVisable} />
    </View>
  );
});
