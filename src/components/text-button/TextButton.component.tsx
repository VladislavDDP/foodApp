import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './text-button.styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const TextButton: React.FC<Props> = ({style, title, ...rest}) => (
  <TouchableOpacity {...rest}>
    <TextWrapper style={[styles.label, style]}>{title}</TextWrapper>
  </TouchableOpacity>
);
