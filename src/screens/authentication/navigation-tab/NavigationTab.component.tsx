import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

import {DefaultStyledText} from '../../../components/app-text/AppText.component';
import {styles} from './navigation-tab.styles';

interface Props {
  title: string;
  value: Animated.Value;
  inputRange: Array<number>;
  outputRange: Array<number>;
  onPress: () => void;
}

export const NavigationTab: React.FC<Props> = props => {
  const height = props.value.interpolate({inputRange: props.inputRange, outputRange: props.outputRange});

  return (
    <TouchableOpacity onPress={props.onPress}>
      <DefaultStyledText style={styles.label}>{props.title}</DefaultStyledText>
      <Animated.View style={[{height: height}, styles.animatedLine]} />
    </TouchableOpacity>
  );
};
