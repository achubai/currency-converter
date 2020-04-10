import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type Props = {
  /**
   * Text
   * */
  text: string;

  /**
   * Text color
   * */
  color?: string;
};
const Title: React.FunctionComponent<Props> = ({ text, color }) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.text, color && { color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Title;
