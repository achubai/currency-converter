import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryVoronoiContainer, VictoryArea } from './victory/';
import colors from '../../theme/colors';
import Title from '../Title';
import { months } from '../../constants/months';

interface ChartChunk {
  x: Date;
  y: number;
}

interface ChartMeta {
  information: string;
  min: number;
  max: number;
}

interface Chart {
  meta: ChartMeta;
  data: Array<ChartChunk>;
}

type Props = {
  data: Chart;
};

const LineChart: React.FunctionComponent<Props> = ({
  data: { meta, data },
}) => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.root}>
      <Title text={meta.information} />
      <VictoryChart
        width={width}
        minDomain={{ y: meta.min }}
        maxDomain={{ y: meta.max }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => {
              const date = new Date(datum.x);
              return `${date.getDate()} ${
                months[date.getMonth()]
              }, \n Highest: ${datum.y}`;
            }}
          />
        }
      >
        <VictoryArea
          padding={{ left: 60 }}
          style={{
            data: {
              fill: colors['300'],
              stroke: colors['700'],
              strokeWidth: 3,
              fillOpacity: 0.4,
            },
          }}
          data={data}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default LineChart;
