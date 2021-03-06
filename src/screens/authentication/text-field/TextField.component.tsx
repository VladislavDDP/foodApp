import React from 'react';
import type {FieldProps} from 'formik';
import {Text, TextInput, View} from 'react-native';

import {styles} from './text-field.styles';
import {InputTheme} from '../../../components/input-theme/InputTheme.component';

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
      <InputTheme
        style={[styles.input, errors[name] ? styles.redline : {}]}
        onChangeText={OnChangeText}
        onBlur={onBlurField}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        ref={innerRef}
        {...inputProps}
      />
      <Text style={styles.error}>{errors[name]}</Text>
    </View>
  );
};
