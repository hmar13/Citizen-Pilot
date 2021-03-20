import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { reducers } from './store/reducer';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <NavigationContainer>
          <MainRootStack />
        </NavigationContainer>
      </SafeAreaView>
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
