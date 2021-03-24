import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducers } from './store/reducer';
import MainRootStack from './RootStack';
import BottomTabs from './navigation/navBarBare';



const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(reducers, middleware);
export default function Index(): JSX.Element {
  const localState = false;
  const content = localState ? <MainRootStack /> : <BottomTabs />
  return content;
}


