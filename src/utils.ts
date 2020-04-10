import { Chart, ChartData } from './store/conversions/types';

const PORTRAIT_WIDTH = 480;

export const isLandscape = (width: number): boolean => {
  return width > PORTRAIT_WIDTH;
};

export const normalizeChartData = ({ meta, data }: ChartData): Chart => {
  return Object.keys(data).reduce<Chart>(
    (acc, item) => {
      const value: number = +data[item].high;
      if (!acc.meta.max) acc.meta.max = value;
      if (!acc.meta.min) acc.meta.min = value;

      if (value > acc.meta.max) acc.meta.max = value;
      if (value < acc.meta.min) acc.meta.min = value;

      acc.data.push({
        x: new Date(item),
        y: value,
      });

      return acc;
    },
    {
      meta: {
        information: meta.information,
        min: null,
        max: null,
      },
      data: [],
    }
  );
};
