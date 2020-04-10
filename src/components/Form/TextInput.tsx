import React from 'react';
import { StyleSheet, TextInput as DefaultTextInput } from 'react-native';
import FormControl, { inputStyles } from './FormControl';

type Props = {
  /**
   * The text to use for the floating label.
   */
  label: string;
  /**
   * Value of the text input.
   */
  value?: string;
  /**
   * Determines which keyboard to open, e.g.numeric.
   * ONLY across platforms values.
   */
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';

  /**
   * Callback that is called when the text input's text changes.
   * */
  onChangeText?: (value: string) => void;
};

const TextInput: React.FunctionComponent<Props> = ({
  label,
  keyboardType,
  value,
  onChangeText,
}) => {
  return (
    <FormControl label={label}>
      <DefaultTextInput
        style={[inputStyles, styles.input]}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});

export default TextInput;
