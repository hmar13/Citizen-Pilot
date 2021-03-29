import 'react-native-gesture-handler';
import React from 'react';
import MainRootStack from './RootStack';
import BottomTabs from './navigation/navBarBare';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer';



export default function Index(): JSX.Element {
  const isLoggedIn = useSelector<RootState, any>(state => state.user.isLoggedIn);
  // const isLoggedIn = true;

  const content = !isLoggedIn ? <MainRootStack /> : <BottomTabs />
  return content;
}


