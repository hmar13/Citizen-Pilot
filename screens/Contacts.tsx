import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ContactItems from '../components/ContactComponents/ContactItems';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import { MaterialIcons } from '@expo/vector-icons';


const Contacts = () => {
  const allContacts = useSelector((state: RootState) => {
    return state.realContacts.state;
  });


  return (
    <View style={styles.container}>
      <HorizontalBanner />
      <View style={styles.headerContainer}>
        <MaterialIcons name="contacts" size={35} color="#3A4276" />
        <Text style={styles.headerText}>City Contacts</Text>
      </View>
      {
        allContacts.length === 0 &&
        <View>
          <Text style={styles.newsText}>Sorry! {'\n'} We haven't published any contacts yet!</Text>
        </View>

      }
      <FlatList
        style={styles.flatlistContainer}
        data={allContacts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ContactItems
            title={item.title}
            phoneNumber={item.phone}
            email={item.email}
            img={item.img}
          />
        )}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  newsText: {
    marginTop: '50%',
    color: 'black',
    textAlign: 'center'
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  flatlistContainer: {
    paddingHorizontal: 25,
  },
});
