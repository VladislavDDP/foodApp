import {inject, observer} from 'mobx-react';
import React, {useState} from 'react';
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

const defaultSelectedOption = 1;

interface Props extends AppNavigatorScreenProps<Screens.Checkout> {
  cart: {
    totalCartPrice: () => number;
  };
}

export const Checkout: React.FC<Props> = inject('cart')(
  observer(({navigation, ...props}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState(defaultSelectedOption);
    const {totalCartPrice} = props.cart;

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

    const setVisable = () => setModalVisible(true);

    const onRequestClose = () => setModalVisible(!modalVisible);

    const goBack = () => navigation.goBack();

    return (
      <View style={styles.container}>
        <CustomHeader title="Checkout" onPress={goBack} />
        <View style={styles.wrapper}>
          <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
            <ModalCheckout setVisable={setModalVisible} />
          </Modal>
          <Text style={styles.title}>Delivery</Text>
          <DeliveryDetails />
          <View>
            <Text style={styles.sectionTitle}>Delivery method</Text>
            <View style={styles.deliveryMethodContainer}>{deliveryOptions.map(renderOption)}</View>
          </View>
          <TotalPrice totalCartPrice={totalCartPrice()} />
        </View>
        <CustomButton text="Proceed to payment" buttonStyle={styles.button} labelStyle={styles.label} onPress={setVisable} />
      </View>
    );
  }),
);
