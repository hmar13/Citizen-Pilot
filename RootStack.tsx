import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import Projects from './screens/Projects';
import Favourites from './screens/Favourites';
import ReportProblem from './screens/ReportProblemScreen';

const RootStack = createStackNavigator();

export default function MainRootStack(): JSX.Element {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name='Welcome' component={Welcome} />
      <RootStack.Screen name='Login' component={Login} />
      <RootStack.Screen name='Register' component={Register} />
      <RootStack.Screen name='Dashboard' component={Dashboard} />
      <RootStack.Screen name='News' component={News} /> */}
      {/* <RootStack.Screen name="Contacts" component={Contacts} /> */}
      {/* <RootStack.Screen name="Report a Problem" component={ReportProblem} /> */}
      {/* <RootStack.Screen name='ProposeSolution' component={ProposeSolution} />
      <RootStack.Screen name='CurrentProposals' component={CurrentProposals} />
      <RootStack.Screen name='Favourites' component={Favourites} />
      {/* <RootStack.Screen name='Projects' component={Projects} /> */}
    </RootStack.Navigator>
  );
}
