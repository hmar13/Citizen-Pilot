import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import News from '../screens/News';
import Contacts from '../screens/Contacts';
import Favourites from '../screens/Favourites';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const MainDashStack = createStackNavigator()

const MainStack = () => {
	return (
		<MainDashStack.Navigator>
	<MainDashStack.Screen name='Dashboard' component={Dashboard} />
	<MainDashStack.Screen name='News' component={News} />
		</MainDashStack.Navigator>
	)
}
// const bottomTabNavigator = createBottomTabNavigator(
//   {
    // dashboard: dashboard,
    // news: news,
    // contacts: contacts,
    // favourites: favourites,
//   {
    //   initialRouteName: 'Home',
//   }
// );

const BottomTabs = () => {
    return(
     <NavigationContainer>
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
					tabBarLabel: 'favourites',
					tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name="heart" color={color} size={size} />),
			}} />
			<Tab.Screen name="contacts" component={Contacts} options={{tabBarLabel: 'contacts', tabBarIcon: ({ color, size }) => (
			<MaterialCommunityIcons name="phone" color={color} size={size}/>
     ),
   }}
 />
					
   </Tab.Navigator>
 </NavigationContainer>
    );
};

export default BottomTabs;