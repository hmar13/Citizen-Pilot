import React from 'react';
<<<<<<< HEAD
import { StyleSheet, SafeAreaView } from 'react-native';
=======
import { NavigationContainer } from '@react-navigation/native';
>>>>>>> 62ba72263506dd8b37c8dddd8c5d3064eb6764e2
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
<<<<<<< HEAD
import { reducers } from './store/reducer';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';
=======
import { createStore, applyMiddleware } from 'redux';
>>>>>>> 62ba72263506dd8b37c8dddd8c5d3064eb6764e2
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import SafeViewAndroid from './components/SafeViewAndroid';
import MainRootStack from './RootStack';
import { reducers } from './store/reducer';

const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(reducers, middleware);

export default function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <NavigationContainer>
            <MainRootStack />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}
