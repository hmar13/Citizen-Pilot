import 'react-native-gesture-handler';
import React from 'react';
import MainRootStack from './RootStack';
import BottomTabs from './navigation/navBarBare';


export default function Index(): JSX.Element {
  const localState = true;
  const content = localState ? <MainRootStack /> : <BottomTabs />
  return content;
}


