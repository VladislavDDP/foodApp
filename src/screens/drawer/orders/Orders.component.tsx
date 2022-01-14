import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './orders.styles';

export const Orders = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://c.tenor.com/vTY0qobiAtsAAAAM/judge-judy-time.gif',
      }}
      style={styles.image}
    />
    <Text style={styles.text}>Orders comming soon...</Text>
  </View>
);
