import React from 'react';
import {Animated, Dimensions, TouchableOpacity} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {styles} from './navigation-tab.styles';

const {width} = Dimensions.get('window');
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
  const inputRange = [(page - step) * width, page * width, (page + step) * width];
  const opacity = scrollX.interpolate({inputRange, outputRange: [minOpacity, maxOpacity, minOpacity], extrapolate: 'clamp'});

  const scroll = () => scrollToAnother(page);

  return (
    <TouchableOpacity onPress={scroll}>
      <TextWrapper style={styles.label}>{title}</TextWrapper>
      <Animated.View style={[{opacity}, styles.animatedLine]} />
    </TouchableOpacity>
  );
};
