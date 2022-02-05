import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextWrapper} from '../text-wrapper/TextWrapper.component';

import {styles} from './radio-button.styles';

interface Props {
  icon?: string;
  text: string;
  iconColor?: string;
  isSelected: boolean;
  shouldSeparate?: boolean;
  onSelect: (text: string) => void;
}

export const RadioButton: React.FC<Props> = ({icon, text, iconColor, isSelected, shouldSeparate, onSelect}) => {
  const activeColor = isSelected ? 'red' : '#999';
  const onSelectOption = () => onSelect(text);

  return (
    <View>
      <TouchableOpacity onPress={onSelectOption}>
        <View style={styles.radioContainer}>
          <View style={[styles.radio, {borderColor: activeColor}]}>
            <View style={isSelected ? styles.activeRadio : null} />
          </View>
          {icon ? (
            <View style={[styles.iconContainer, {backgroundColor: iconColor}]}>
              <Icon style={styles.icon} name={icon} size={20} />
            </View>
          ) : null}
          <TextWrapper>{text}</TextWrapper>
        </View>
      </TouchableOpacity>
      {shouldSeparate ? <View style={styles.line} /> : null}
    </View>
  );
};
