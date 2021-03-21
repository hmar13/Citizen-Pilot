import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import {reducers} from './store/reducer';
import { createStore, applyMiddleware } from 'redux';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(reducers, middleware);

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <NavigationContainer>
            <MainRootStack />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
