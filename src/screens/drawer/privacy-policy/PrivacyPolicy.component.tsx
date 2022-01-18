import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './privacy-policy.styles';

export const PrivacyPolicy = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://c.tenor.com/vTY0qobiAtsAAAAM/judge-judy-time.gif',
      }}
      style={styles.image}
    />
    <Text style={styles.text}>Privacy comming soon...</Text>
  </View>
);
