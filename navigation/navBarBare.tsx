import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import News from '../screens/News';
import Contacts from '../screens/Contacts';
import Favourites from '../screens/Favourites';
import CurrentProposals from '../screens/CurrentProposals';
import Projects from '../screens/Projects';
import ReportProblem from '../screens/ReportProblemScreen';
import ProposeSolution from '../screens/ProposeSolutionScreen';

import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const MainDashStack = createStackNavigator()

const MainStack = () => {
	return (
		<MainDashStack.Navigator screenOptions={{
      headerShown: false,
    }}>
			<MainDashStack.Screen name='Dashboard' component={Dashboard} />
      <MainDashStack.Screen name="CurrentProposals" component={CurrentProposals} />
      <MainDashStack.Screen name="ReportProblem" component={ReportProblem} />
      <MainDashStack.Screen name="ProposeSolution" component={ProposeSolution} />
      <MainDashStack.Screen name="Projects" component={Projects} />
		</MainDashStack.Navigator>
	)
}

const BottomTabs = () => {
    return(
    
			<Tab.Navigator
				initialRouteName="Feed"
				tabBarOptions={{
				activeTintColor: 'black',
     }}
   >
					<Tab.Screen
       name="dashboard"
       component={MainStack}
       options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name="home" color={color} size={size} />
         ),
       }}
     />
     <Tab.Screen
       name="news"
       component={News}
       options={{
				tabBarLabel: 'news',
				tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons
					name="book"
					color={color}
					size={size}
					/>
         ),
       }}
        />
      <Tab.Screen
					name="favourites"
					component={Favourites}
					options={{
					tabBarLabel: 'Favourites',
					tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="heart" color={color} size={size} />),
			}} />
			<Tab.Screen name="contacts" component={Contacts} options={{tabBarLabel: 'contacts', tabBarIcon: ({ color, size }) => (
			<MaterialCommunityIcons name="phone" color={color} size={size}/>
     ),
   }}
 />
					
   </Tab.Navigator>

    );
};

export default BottomTabs;