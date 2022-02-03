import React from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';

import {Languages} from '../../../../localization/languages';
import {ThemeNames} from '../../../../theme/ThemeNames';
import {useTheme} from '../../../../theme/theme';

interface Props extends PickerProps<ThemeNames | Languages> {
  items: Array<{label: ThemeNames | Languages}>;
}

export const CustomPicker: React.FC<Props> = ({items, ...rest}) => {
  const {theme} = useTheme();

  return (
    <Picker {...rest} dropdownIconColor={theme.colorScheme.text}>
      {items.map((item: {label: ThemeNames | Languages}) => (
        <Picker.Item label={item.label} color="#FF460A" value={item.label} />
      ))}
    </Picker>
  );
};
