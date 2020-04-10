import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import ResultOutput from '../components/ResultOutput';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LineChart from '../components/LineChart/LineChart';
import { isLandscape } from '../utils';
import colors from '../theme/colors';

const ConverterResultContainer = () => {
  const { width } = Dimensions.get('window');
  const { amount, conversion, isLoading, error } = useSelector(
    ({ controls: { amount, from, to }, conversions }: RootState) => ({
      amount: +amount,
      error: conversions.error,
      isLoading: conversions.isLoading,
      conversion: conversions.data[`${from}-${to}`],
    })
  );

  return (
    <View style={[styles.root, isLandscape(width) && styles.rootLandscape]}>
      <View style={styles.container}>
        {error ? <Text>{error}</Text> : null}
        {isLoading ? (
          <ActivityIndicator size="large" color={colors['500']} />
        ) : (
          conversion && (
            <>
              <ResultOutput
                fromAmount={amount}
                fromCurrency={conversion.from_currency}
                toCurrency={conversion.to_currency}
                conversionRate={+conversion.value}
              />
              <LineChart data={conversion.chart} />
            </>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  rootLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 1000,
  },
});

export default ConverterResultContainer;
