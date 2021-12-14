import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

import {AppText} from '../../../components/app-text/AppText.component';
import {styles} from './navigation-tab.styles';

interface Props {
  title: string;
  height: Animated.Value;
  onPress: () => void;
}

export const NavigationTab: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <AppText children={props.title} style={styles.label} />
    <Animated.View style={[{height: props.height}, styles.animatedLine]} />
  </TouchableOpacity>
);
