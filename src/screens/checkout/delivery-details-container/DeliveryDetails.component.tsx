import React from 'react';
import {Text, View} from 'react-native';

import {ChangeButton} from '../change-button/ChangeButton.component';
import {styles} from './delivery-details.styles';

export const DeliveryDetails = () => (
  <View style={styles.addressContainer}>
    <View style={styles.addressHeader}>
      <Text style={styles.sectionTitle}>Address details</Text>
      <ChangeButton />
    </View>
    <View style={styles.addressTextContainer}>
      <Text style={styles.customerName}>Marvis Kparobo</Text>
      <View style={styles.separator} />
      <Text>Km 5 refinery road oppsite republic road, effurun, delta state</Text>
      <View style={styles.separator} />
      <Text>+234 9011039271</Text>
    </View>
  </View>
);
