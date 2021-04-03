import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';

const RootStack = createStackNavigator();

export default function MainRootStack(): JSX.Element {
  return (

    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name='Dashboard' component={Dashboard} />
    </RootStack.Navigator>

  );
}
