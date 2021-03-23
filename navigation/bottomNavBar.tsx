import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Contacts from '../screens/Contacts';
import Dashboard from '../screens/Dashboard';
import Favourites from '../screens/Favourites';
import News from '../screens/News';


const dashNavRoute = () => <Dashboard />
const newsRoute = () => <News/>
const favouritesRoute = () => <Favourites/>
const contactsRoute = () => <Contacts/>



const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Home', icon: 'home' },
    { key: 'news', title: 'News', icon: 'book' },
    { key: 'favourites', title: 'Favourites', icon: 'heart' },
    { key: 'contacts', title: 'Contacts', icon: 'contacts' },

    
  ]);

    const renderScene = BottomNavigation.SceneMap({
        dashboard: dashNavRoute,
        news: newsRoute,
        contacts: contactsRoute,
        favourites: favouritesRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationBar;