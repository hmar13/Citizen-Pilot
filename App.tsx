import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
<<<<<<< HEAD
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { reducers } from './store/reducer';
import { createStore } from 'redux';
=======
import { Provider } from 'react-redux';
import {reducers} from './store/reducer';
import { createStore, applyMiddleware } from 'redux';
>>>>>>> f0d37b67357014f68c3b3739aaefcefb8559c910
import { NavigationContainer } from '@react-navigation/native';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

<<<<<<< HEAD
const store = createStore(reducers);
=======
const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(reducers, middleware);
>>>>>>> f0d37b67357014f68c3b3739aaefcefb8559c910

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
