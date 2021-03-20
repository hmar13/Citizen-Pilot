import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import Dashboard from './screens/Dashboard';
const RootStack = createStackNavigator();

export default function MainRootStack() {
  return (
    <RootStack.Navigator>
      {/* { <RootStack.Screen name='Welcome' component={Welcome} />
      <RootStack.Screen name='Login' component={Login} />
      <RootStack.Screen name='Register' component={Register} /> */}
      <RootStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      {/* <RootStack.Screen name='News' component={News} /> 
      <RootStack.Screen name='Contacts' component={Contacts} /> 
       <RootStack.Screen name='ReportProblem' component={ReportProblem} />
      <RootStack.Screen name='ProposeSolution' component={ProposeSolution} />
      <RootStack.Screen name='CurrentProposals' component={CurrentProposals} />
      <RootStack.Screen name='Favourites' component={Favourites} />
      <RootStack.Screen name='Projects' component={Projects} />} */}
    </RootStack.Navigator>
  );
}
