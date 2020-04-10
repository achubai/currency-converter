import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import colors from '../theme/colors';
import ConverterContainer from './ConverterContainer';
import ConverterResultContainer from './ConverterResultContainer';
import store from '../store/store';

type Props = {}

const AppContainer: React.FunctionComponent<Props> = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <ScrollView>
          <ConverterContainer />
          <ConverterResultContainer />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    backgroundColor: colors[500],
  },
  infoContainer: {
    flex: 1,
  },
});

export default AppContainer;
