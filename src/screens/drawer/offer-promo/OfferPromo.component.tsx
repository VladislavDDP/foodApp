import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './offer-promo.styles';

export const OfferPromo = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://c.tenor.com/vTY0qobiAtsAAAAM/judge-judy-time.gif',
      }}
      style={styles.image}
    />
    <Text style={styles.text}>Promo comming soon...</Text>
  </View>
);
