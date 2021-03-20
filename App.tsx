import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/index';
import MainRootStack from './RootStack';
import SafeViewAndroid from './components/SafeViewAndroid';

const store = createStore(reducers);

export default function App () {
  return (
    <Provider store={store}>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View>
          <Text>Hello</Text>
        </View>
        {/* <NavigationContainer>
          <MainRootStack />
        </NavigationContainer> */}
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
