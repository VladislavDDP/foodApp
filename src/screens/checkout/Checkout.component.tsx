import React, {useEffect, useState} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {InteractionManager, Modal} from 'react-native';
import {View} from 'react-native-animatable';

import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './checkout.styles';
import {DeliveryDetails} from './delivery-details-container/DeliveryDetails.component';
import {ModalCheckout} from './modal-checkout/ModalCheckout.component';
import {TotalPrice} from './total-price/TotalPrice.component';
import {LoadingScreen} from '../../components/loading-screen/LoadingScreen.component';
import {DeliveryOptionsBox} from './delivery-options-box/DeliveryOptionsBox.component';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';
import {ViewTheme} from '../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../components/view-theme/ColorIntencity';
import {localisation} from '../../localization/localization';
import {ProfileStore} from '../../store/profileStore';
import {CartStore} from '../../store/cartStore';
import {HistoryStore} from '../../store/historyStore';
import {OrderDetails} from '../../model/orderDetails';

export const Checkout: React.FC<AppNavigatorScreenProps<Screens.Checkout>> = ({navigation}) => {
  const profile = useLocalObservable(() => new ProfileStore());

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const historyStore = useLocalObservable(() => new HistoryStore());
  const cart = useLocalObservable(() => new CartStore());

  useEffect(() => {
    cart.getCartItems();
  });

  const approvePayment = async () => {
    setLoading(true);
    setModalVisible(false);

    const orderDetails = new OrderDetails(profile.address, profile.phone, profile.DeliveryOption, profile.PaymentOption, cart.items);

    try {
      const response = await historyStore.appendHistory(orderDetails);
      if (response) {
        cart.clearCart();
        InteractionManager.runAfterInteractions(() => {
          navigation.replace(Screens.DrawerStack);
        });
      }
    } catch (e) {
      // TODO: catch the error
    } finally {
      setLoading(false);
    }
  };

  const setVisable = () => setModalVisible(true);

  const onRequestClose = () => setModalVisible(!modalVisible);

  if (loading) {
    return <LoadingScreen title="Ordering..." />;
  }

  return (
    <Observer>
      {() => (
        <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
          <CustomHeader title="Checkout" onPress={navigation.goBack} />
          <View style={styles.wrapper}>
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
              <ModalCheckout approvePayment={approvePayment} setVisable={setModalVisible} />
            </Modal>
            <TextWrapper style={styles.title}>{localisation.t('checkoutTitle')}</TextWrapper>
            <DeliveryDetails />
            <DeliveryOptionsBox selectedOption={profile.deliveryOption} setOption={profile.setDeliveryMethod} />
            <TotalPrice totalCartPrice={cart.totalCartPrice} />
          </View>
          <CustomButton text={localisation.t('buttons.proceedToPayment')} onPress={setVisable} />
        </ViewTheme>
      )}
    </Observer>
  );
};
