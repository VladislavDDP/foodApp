import React from 'react';
import type {FieldProps} from 'formik';
import {Text, TextInput, View} from 'react-native';

import {styles} from './text-field.styles';

interface OtherProps {
  innerRef: React.RefObject<TextInput>;
  label: string;
}

export const TextField = (props: FieldProps & OtherProps) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors},
    innerRef,
    label,
    ...inputProps
  } = props;

  const onBlurField = () => onBlur(name);
  const OnChangeText = (text: string) => onChange(name)(text);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, errors[name] ? styles.redline : {}]}
        onChangeText={OnChangeText}
        onBlur={onBlurField}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        ref={innerRef}
        {...inputProps}
      />
    </View>
  );
};
