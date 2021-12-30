import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './radio-button.styles';

interface Props {
  id: number;
  icon?: string;
  text: string;
  color: string;
  selectedId: number;
  onSelect: (id: number) => void;
}

export const RadioButton: React.FC<Props> = ({id, icon, text, color, selectedId, onSelect}) => {
  const activeColor = selectedId === id ? 'red' : '#999';

  const selectId = () => onSelect(id);

  return (
    <View>
      <TouchableOpacity onPress={selectId}>
        <View style={styles.radioContainer}>
          <View style={[styles.radio, {borderColor: activeColor}]}>
            <View style={selectedId === id ? styles.activeRadio : null} />
          </View>
          {icon ? (
            <View style={[styles.iconContainer, {backgroundColor: color}]}>
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
