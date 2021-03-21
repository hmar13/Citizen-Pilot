import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './screens/Contacts';
import Dashboard from './screens/Dashboard';
import Projects from './screens/Projects';
import Favourites from './screens/Favourites';
import ReportProblem from './screens/ReportProblemScreen';

const RootStack = createStackNavigator();

export default function MainRootStack(): JSX.Element {
  return (
    <RootStack.Navigator>
<<<<<<< HEAD
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
=======
      {/* <RootStack.Screen name='Welcome' component={Welcome} /> */}
      {/* <RootStack.Screen name='Login' component={Login} /> */}
      {/* <RootStack.Screen name='Register' component={Register} /> */}
      {/* <RootStack.Screen name='Dashboard' component={Dashboard} /> */}
      {/* <RootStack.Screen name='News' component={News} /> */}
      {/* <RootStack.Screen name='Contacts' component={Contacts} /> */}
      {/* <RootStack.Screen name='ReportProblem' component={ReportProblem} /> */}
      {/* <RootStack.Screen name='ProposeSolution' component={ProposeSolution} /> */}
      {/* <RootStack.Screen name='CurrentProposals' component={CurrentProposals} /> */}
      {/* <RootStack.Screen name='Favourites' component={Favourites} /> */}
      {/* <RootStack.Screen name='Projects' component={Projects} /> */}
>>>>>>> 62ba72263506dd8b37c8dddd8c5d3064eb6764e2
    </RootStack.Navigator>
  );
}
