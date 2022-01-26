import React from 'react';
import {Animated, Dimensions, TouchableOpacity} from 'react-native';

import {DefaultStyledText} from '../../../components/app-text/AppText.component';
import {useTheme} from '../../../theme/theme';
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
  const {theme} = useTheme();
  const inputRange = [(page - step) * width, page * width, (page + step) * width];
  const opacity = scrollX.interpolate({inputRange, outputRange: [minOpacity, maxOpacity, minOpacity], extrapolate: 'clamp'});

  const scroll = () => scrollToAnother(page);

  return (
    <TouchableOpacity onPress={scroll}>
      <DefaultStyledText style={[styles.label, {color: theme.colorScheme.primaryText}]}>{title}</DefaultStyledText>
      <Animated.View style={[{opacity}, styles.animatedLine]} />
    </TouchableOpacity>
  );
};
