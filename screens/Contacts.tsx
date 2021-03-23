/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ContactItems from '../components/ContactComponents/ContactItems';

const Contacts = () => {
  const allContacts = useSelector((state: RootState) => {
    return state.cityContacts.contacts;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
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
      <Text style={styles.footer__container}>Navigation Goes Here</Text>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90E0EF',
  },
  header__container: {
    backgroundColor: 'white',
    marginRight: 25,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    height: 70,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  header__text: {
    alignSelf: 'center',
  },
  flatlist__container: {
    paddingHorizontal: 15,
  },
  footer__container: {
    backgroundColor: 'white',
  },
});
