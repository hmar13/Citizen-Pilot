import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './store/reducer';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';

const store = createStore(reducers);

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
