import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import FormControl, { inputStyles } from './FormControl';

type Props = {
  /**
   * Value matching value of one of the items
   * */
  value?: string;

  /**
   * Callback for when an item is selected
   * */
  onValueChange: (value: string) => void;

  /**
   * List of options for the select dropdown.
   */
  items: Array<Item>;

  /**
   * Label text shown above select.
   */
  label?: string;
};

const Picker: React.FunctionComponent<Props> = ({
  label,
  items,
  value,
  onValueChange,
}) => {
  value = value ? value : undefined;
  const combinedStyles = [
    inputStyles,
    styles.picker,
    Platform.OS === 'web' && { WebkitAppearance: 'none' },
  ];
  return (
    <FormControl label={label}>
      <RNPickerSelect
        value={value || ''}
        style={{
          inputIOS: combinedStyles,
          inputAndroid: combinedStyles,
        }}
        onValueChange={onValueChange}
        items={items}
      />
    </FormControl>
  );
};

const styles = StyleSheet.create({
  picker: {
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Picker;
