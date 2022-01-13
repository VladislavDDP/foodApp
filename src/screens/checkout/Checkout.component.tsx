import React, {useState} from 'react';
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
import {DeliveryOption, deliveryOptions} from './deliveryOptions.types';
import {ModalCheckout} from './modal-checkout/ModalCheckout.component';
import {TotalPrice} from './total-price/TotalPrice.component';
import {useStore} from '../../store/store';

const defaultSelectedOption = 1;

interface Props extends AppNavigatorScreenProps<Screens.Checkout> {}

export const Checkout: React.FC<Props> = observer(({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState(defaultSelectedOption);
  const {foodStore, cart} = useStore();

  const renderOption = (option: DeliveryOption) => {
    const setOption = () => setDeliveryOption(option.id);

    return (
      <RadioButton
        key={option.id}
        text={option.text}
        isSelected={deliveryOption === option.id}
        shouldSeparate={option.id !== deliveryOptions.length}
        onSelect={setOption}
      />
    );
  };

  const approvePayment = () => {
    setModalVisible(false);
    foodStore.appendHistory(cart.cartItems);
    cart.clearCart();
    navigation.replace(Screens.DrawerStack);
  };

  const setVisable = () => setModalVisible(true);

  const onRequestClose = () => setModalVisible(!modalVisible);

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
          <View style={styles.deliveryMethodContainer}>{deliveryOptions.map(renderOption)}</View>
        </View>
        <TotalPrice totalCartPrice={cart.totalCartPrice} />
      </View>
      <CustomButton text="Proceed to payment" buttonStyle={styles.button} labelStyle={styles.label} onPress={setVisable} />
    </View>
  );
});
