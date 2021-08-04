import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import SafeViewAndroid from './components/SafeViewAndroid';
import { reducers } from './store/reducer';
import Index from './index';

import * as firebase from 'firebase';
import 'firebase/storage';
import apiKeys from './config/keys';

LogBox.ignoreLogs(['Setting a timer for a long period of time']);


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3A4276',
    accent: '#f1c40f',

  },
};

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middleware);
export default function App(): JSX.Element {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <NavigationContainer>
            <Index />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}
