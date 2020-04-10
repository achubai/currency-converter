import React, { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../theme/colors';

type Props = {
  /**
   * The text to use for the floating label.
   */
  label?: string;

  children: ReactNode;
};

export const inputStyles = {
  backgroundColor: colors.A100,
  paddingVertical: 12,
  paddingHorizontal: 10,
  borderWidth: 0,
  borderRadius: 4,
  color: 'black',
};

const FormControl: React.FunctionComponent<Props> = ({ label, children }) => {
  return (
    <View style={styles.root}>
      {label && <Text style={[styles.label]}>{label}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    color: colors.A100,
  },
});

export default FormControl;
