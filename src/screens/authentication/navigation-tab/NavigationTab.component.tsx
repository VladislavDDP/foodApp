import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

import {DefaultStyledText} from '../../../components/app-text/AppText.component';
import {styles} from './navigation-tab.styles';

interface Props {
  title: string;
  height: Animated.AnimatedInterpolation;
  onPress: () => void;
}

export const NavigationTab: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <DefaultStyledText style={styles.label}>{props.title}</DefaultStyledText>
    <Animated.View style={[{height: props.height}, styles.animatedLine]} />
  </TouchableOpacity>
);
