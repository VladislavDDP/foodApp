import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './modal-checkout.styles';
import {ModalButton} from './ModalButton.component';

interface Props {
  setVisable: (value: boolean) => void;
}

export const ModalCheckout: React.FC<Props> = ({setVisable}) => {
  const setUnvisable = () => setVisable(false);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.modalTitle}>
          <Text style={styles.titleText}>Please note</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>Delivery to Mainland</Text>
          <Text style={styles.infoText}>N1000 - N2000</Text>
          <View style={styles.separator} />
          <Text>Delivery to island</Text>
          <Text style={styles.infoText}>N2000 - N3000</Text>
        </View>
        <View style={styles.controlButtons}>
          <ModalButton text="Cancel" onPress={setUnvisable} style={{...styles.btnText, ...styles.leftBtn}} />
          <ModalButton text="Proceed" onPress={setUnvisable} style={{...styles.btnText, ...styles.rightBtn}} />
        </View>
      </View>
    </View>
  );
};
