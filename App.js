import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import MainScreen from './screens/MainScreen';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
