import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './radio-button.styles';

interface Props {
  icon?: string;
  text: string;
  iconColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const RadioButton: React.FC<Props> = ({icon, text, iconColor, isSelected, onSelect}) => {
  const activeColor = isSelected ? 'red' : '#999';

  return (
    <View>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.radioContainer}>
          <View style={[styles.radio, {borderColor: activeColor}]}>
            <View style={isSelected ? styles.activeRadio : null} />
          </View>
          {icon ? (
            <View style={[styles.iconContainer, {backgroundColor: iconColor}]}>
              <Icon style={styles.icon} name={icon} size={20} />
            </View>
          ) : null}
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};