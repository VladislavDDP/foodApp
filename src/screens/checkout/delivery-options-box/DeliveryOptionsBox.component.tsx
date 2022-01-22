import React from 'react';
import {Text, View} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {DeliveryType} from '../deliveryOptions.types';
import {styles} from './delivery-options-box.styles';

interface Props {
  selectedOption: DeliveryType;
  setOption: (option: DeliveryType) => void;
}

export const DeliveryOptionsBox: React.FC<Props> = ({selectedOption, setOption}) => {
  const setDoorDeliveryOption = () => setOption(DeliveryType.DoorDelivery);
  const setPickUpOption = () => setOption(DeliveryType.PickUp);

  return (
    <View>
      <Text style={styles.sectionTitle}>Delivery method</Text>
      <View style={styles.deliveryMethodContainer}>
        <RadioButton
          text={DeliveryType.DoorDelivery}
          isSelected={selectedOption === DeliveryType.DoorDelivery}
          shouldSeparate
          onSelect={setDoorDeliveryOption}
        />
        <RadioButton text={DeliveryType.PickUp} isSelected={selectedOption === DeliveryType.PickUp} onSelect={setPickUpOption} />
      </View>
    </View>
  );
};
