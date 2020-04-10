import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { ChartData, ConversionType, RateData, SET_CONVERSION, SET_CONVERSION_INDICATOR } from './types';
import alphaVantage from 'alphavantage';
import { ALPHA_KEY } from '../../constants/alpha';
import { normalizeChartData } from '../../utils';
import { setControlValue } from '../controls/actions';

const alpha = alphaVantage({ key: ALPHA_KEY });

export const setConversionIndicator = (isLoading): ConversionType => {
  return {
    type: SET_CONVERSION_INDICATOR,
    payload: {
      isLoading
    },
  };
};

export const setConversion = (conversion): ConversionType => {
  return {
    type: SET_CONVERSION,
    payload: conversion,
  };
};

export const getRates = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const {
    conversions,
    controls: { amount, from, to },
  }: RootState = getState();
  const prevConversion = conversions[`${from}-${to}`];
  const now = new Date().getTime();
  const fiveMinutes = 5 * 60 * 1000;

  // Don't do api call earlier 5 minutes
  // or if no selected currency
  if (
    (prevConversion && prevConversion.timestamp + fiveMinutes > now) ||
    !from ||
    !to
  )
    return;

  if (!amount) {
    dispatch(setControlValue('amount', '1'));
  }
  try {
    dispatch(setConversionIndicator(true));
    const rawRateData = await alpha.forex.rate(from, to);
    const rawChartData = await alpha.util.fn('FX_DAILY')({
      from_symbol: from,
      to_symbol: to,
    });

    const {
      rate: { from_currency, to_currency, value },
    }: RateData = alpha.util.polish(rawRateData);

    const chartData: ChartData = alpha.util.polish(rawChartData);
    const normalizedChartData = normalizeChartData(chartData);

    dispatch(
      setConversion({
        timestamp: new Date().getTime(),
        conversion: `${from}-${to}`,
        from_currency,
        to_currency,
        value,
        chart: normalizedChartData,
      })
    );
    dispatch(setConversionIndicator(false));
  } catch (e) {
    dispatch(setConversionIndicator(false));
    console.warn(e); // TODO: add error handler
  }
};
