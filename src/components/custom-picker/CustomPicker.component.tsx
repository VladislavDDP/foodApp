import React from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';

import {useTheme} from '../../theme/theme';

interface Item {
  label: string;
  value: string;
}

interface Props extends PickerProps<string> {
  items: Array<Item>;
}

export const CustomPicker: React.FC<Props> = ({items, ...rest}) => {
  const {theme} = useTheme();

  return (
    <Picker {...rest} dropdownIconColor={theme.colorScheme.text}>
      {items.map((item: Item) => (
        <Picker.Item key={item.label} label={item.label} color="#FF460A" value={item.value} />
      ))}
    </Picker>
  );
};
