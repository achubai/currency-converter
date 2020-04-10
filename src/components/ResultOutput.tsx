import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type Props = {
  fromAmount: number;
  fromCurrency: string;
  toCurrency: string;
  conversionRate: number;
};

const ResultOutput: React.FunctionComponent<Props> = ({
  fromAmount,
  fromCurrency,
  toCurrency,
  conversionRate,
}) => {
  const result = (fromAmount * conversionRate).toFixed(5);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {fromAmount} {fromCurrency} =
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.text}>{toCurrency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default ResultOutput;
