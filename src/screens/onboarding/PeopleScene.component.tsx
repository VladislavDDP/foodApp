import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import women from '../../assets/images/ToyFaces_Tansparent_BG_1.png';
import men from '../../assets/images/ToyFaces_Tansparent_BG_2.png';
import {useTheme} from '../../theme/theme';
import {styles} from './styles/people-scene.styles';

export const PeopleScene = () => {
  const {theme} = useTheme();

  return (
    <View style={styles.imagesWrapper}>
      <Image source={women} style={styles.womenImg} />
      <Image source={men} style={styles.menImg} />
      <LinearGradient
        colors={[theme.colorScheme.shadow, theme.colorScheme.secondaryBackground, theme.colorScheme.secondaryBackground]}
        style={styles.redBluredBox}
      />
    </View>
  );
};
