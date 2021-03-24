/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ContactItems from '../components/ContactComponents/ContactItems';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import BottomTabs from '../navigation/navBarBare';

const Contacts = () => {
  const allContacts = useSelector((state: RootState) => {
    return state.cityContacts.contacts;
  });
  return (
    <View style={styles.container}>
      <HorizontalBanner />
      <View style={styles.header__container}>
        <MaterialIcons name="contacts" size={35} color="#3A4276" />
        {/* <FontAwesome5 name="hammer" size={35} color="#3A4276" /> */}
        <Text style={styles.header__text}>City Contacts</Text>
      </View>
      <FlatList
        style={styles.flatlist__container}
        data={allContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactItems
            title={item.title}
            phoneNumber={item.phoneNumber}
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
  header__container: {
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
  header__text: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  flatlist__container: {
    paddingHorizontal: 25,
  },
  footer__container: {
    backgroundColor: 'white',
  },
});
