import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {styles} from './input-field.styles';

interface Props {
  label: string;
  placeholder: string;
  isSecure?: boolean;
  value: string;
  setInput: (text: string) => void;
}

export const InputField: React.FC<Props> = props => (
  <View style={styles.container}>
    <Text>{props.label}</Text>
    <TextInput
      style={styles.input}
      value={props.value}
      secureTextEntry={!!props.isSecure}
      onChangeText={props.setInput}
      placeholder={props.placeholder}
    />
    <View style={styles.line} />
  </View>
);
