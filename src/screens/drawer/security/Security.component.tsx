import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './security.styles';

export const Security = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://c.tenor.com/vTY0qobiAtsAAAAM/judge-judy-time.gif',
      }}
      style={styles.image}
    />
    <Text style={styles.text}>Security comming soon...</Text>
  </View>
);
