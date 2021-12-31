import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';

import {DefaultStyledText} from '../../../components/app-text/AppText.component';
import {screenWidth} from '../../../vars/variables';
import {styles} from './navigation-tab.styles';

const minOpacity = 0;
const maxOpacity = 1;
const step = 1;

interface Props {
  page: number;
  title: string;
  scrollX: Animated.Value;
  scrollToAnother: (page: number) => void;
}

export const NavigationTab: React.FC<Props> = ({page, title, scrollX, scrollToAnother}) => {
  const inputRange = [(page - step) * screenWidth, page * screenWidth, (page + step) * screenWidth];
  const opacity = scrollX.interpolate({inputRange, outputRange: [minOpacity, maxOpacity, minOpacity], extrapolate: 'clamp'});

  const scroll = () => scrollToAnother(page);

  return (
    <TouchableOpacity onPress={scroll}>
      <DefaultStyledText style={styles.label}>{title}</DefaultStyledText>
      <Animated.View style={[{opacity}, styles.animatedLine]} />
    </TouchableOpacity>
  );
};
