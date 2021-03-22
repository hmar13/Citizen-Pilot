import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import Contacts from './screens/Contacts';
import Dashboard from './screens/Dashboard';
import Projects from './screens/Projects';
import Favourites from './screens/Favourites';
import ProposeSolution from './screens/ProposeSolutionScreen';
import ReportProblem from './screens/ReportProblemScreen';
import News from './screens/News';
import CurrentProposals from './screens/CurrentProposals';

const RootStack = createStackNavigator();

export default function MainRootStack(): JSX.Element {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <RootStack.Screen name="Welcome" component={WelcomeScreen} /> */}
      {/* <RootStack.Screen name="Login" component={Login} /> */}
      {/* <RootStack.Screen name="Register" component={Register} /> */}
      {/* <RootStack.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <RootStack.Screen name="News" component={News} /> */}
      {/* <RootStack.Screen name='Contacts' component={Contacts} /> */}
      {/* <RootStack.Screen name="ReportProblem" component={ReportProblem} /> */}
      {/* <RootStack.Screen name="ProposeSolution" component={ProposeSolution} /> */}
      <RootStack.Screen name='CurrentProposals' component={CurrentProposals} />
      {/* <RootStack.Screen name='Favourites' component={Favourites} /> */}
      {/* <RootStack.Screen name='Projects' component={Projects} /> */}
    </RootStack.Navigator>
  );
}
