import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './modal-checkout.styles';

interface Props {
  setVisable: (value: boolean) => void;
}

export const ModalCheckout: React.FC<Props> = ({setVisable}) => {
  const setUnVisable = () => setVisable(false);

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
          <TouchableOpacity onPress={setUnVisable}>
            <Text style={[styles.btnText, styles.leftBtn]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightBtn} onPress={setUnVisable}>
            <Text style={[styles.btnText, styles.rightBtn]}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
