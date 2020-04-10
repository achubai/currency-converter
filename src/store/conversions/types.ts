export const SET_CONVERSION = 'SET_CONVERSION';
export const SET_CONVERSION_INDICATOR = 'SET_CONVERSION_INDICATOR';

export interface ChartChunk {
  x: Date;
  y: number;
}

export interface ChartMeta {
  information: string;
  min: number;
  max: number;
}

export interface Chart {
  meta: ChartMeta;
  data: Array<ChartChunk>;
}

export interface Rate {
  from_currency: string;
  to_currency: string;
  value: string;
}

export interface Conversion extends Rate {
  timestamp: number;
  conversion: string;
  chart: Chart;
}

export interface ConversionsState {
  isLoading: boolean;
  data: {
    [key: string]: Conversion;
  };
}

export interface RateData {
  rate: Rate;
}

export interface RawChartChunk {
  [key: string]: {
    open: string;
    high: string;
    low: string;
    close: string;
  };
}

export interface ChartData {
  meta: ChartMeta;
  data: RawChartChunk;
}

export interface SetConversionAction {
  type: typeof SET_CONVERSION;
  payload: Conversion;
}

export interface SetConversionIndicatorAction {
  type: typeof SET_CONVERSION_INDICATOR;
  payload: {
    isLoading: boolean;
  };
}

export type ConversionType = SetConversionAction | SetConversionIndicatorAction;
