import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import women from '../../assets/images/ToyFaces_Tansparent_BG_1.png';
import men from '../../assets/images/ToyFaces_Tansparent_BG_2.png';
import {styles} from './styles/people-scene.styles';

export const PeopleScene = () => (
  <View style={styles.imagesWrapper}>
    <Image source={women} style={styles.womenImg} />
    <Image source={men} style={styles.menImg} />
    <LinearGradient colors={['rgba(236, 75, 75, 0)', '#ff5e29', '#FF470B']} style={styles.redBluredBox} />
  </View>
);
