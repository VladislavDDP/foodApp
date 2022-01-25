import React, {createRef} from 'react';
import {StyleProp, Text, TextInput, View, ViewStyle} from 'react-native';

import {styles} from './input-field.styles';

interface Props {
  label: string;
  isSecure?: boolean;
  error?: StyleProp<ViewStyle>;
  value: string;
  setInput: (text: string) => void;
}

export const InputField: React.FC<Props> = props => {
  const input = createRef<TextInput>();

  const blurInput = () => input.current?.blur();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        ref={input}
        style={styles.input}
        value={props.value}
        secureTextEntry={!!props.isSecure}
        onChangeText={props.setInput}
        autoCapitalize="none"
        onBlur={blurInput}
      />
      <View style={[styles.line, props.error]} />
    </View>
  );
};
