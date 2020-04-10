import React from 'react';
import { LayoutChangeEvent, StyleSheet, View, Dimensions } from 'react-native';
import colors from '../theme/colors';
import Title from '../components/Title';
import currencies from '../constants/currencies';
import Picker from '../components/Form/Picker';
import TextInput from '../components/Form/TextInput';
import Button from '../components/Form/Button';
import { isLandscape } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setControlValue } from '../store/controls/actions';
import { getRates } from '../store/conversions/actions';

type Props = {}

const ConverterContainer: React.FunctionComponent<Props> = () => {
  const { width } = Dimensions.get('window');

  const dispatch = useDispatch();
  const { amount, from, to } = useSelector(
    ({ controls }: RootState) => controls
  );

  return (
    <View style={[styles.root, isLandscape(width) && styles.rootLandscape]}>
      <View style={styles.container}>
        <Title text={'Currency Converter'} color={colors.A100} />
        <View style={[styles.grid, isLandscape(width) && styles.gridLandscape]}>
          <View style={isLandscape(width) && styles.col}>
            <TextInput
              label="Amount"
              keyboardType="number-pad"
              value={Number(amount).toString()}
              onChangeText={(val) => dispatch(setControlValue('amount', val))}
            />
          </View>
          <View style={isLandscape(width) && styles.col}>
            <Picker
              label={'From'}
              value={from}
              items={currencies}
              onValueChange={(val) => dispatch(setControlValue('from', val))}
            />
          </View>
          <View style={isLandscape(width) && styles.col}>
            <Picker
              label={'To'}
              value={to}
              items={currencies}
              onValueChange={(val) => dispatch(setControlValue('to', val))}
            />
          </View>
          <View
            style={isLandscape(width) && [styles.col, styles.buttonContainer]}
          >
            <Button
              text="Convert"
              onPress={() => {
                dispatch(getRates());
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: colors[500],
    padding: 20,
  },
  container: {
    maxWidth: 2200,
  },
  rootLandscape: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  grid: {},
  gridLandscape: {
    flexDirection: 'row',
  },
  buttonContainer: {
    paddingTop: 22,
  },
  col: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
export default ConverterContainer;
