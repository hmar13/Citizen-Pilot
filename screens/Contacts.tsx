/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ContactItems from '../components/ContactComponents/ContactItems';

const Contacts = () => {
<<<<<<< HEAD
=======
  const allContacts = useSelector((state: RootState) => {
    return state.cityContacts.contacts;
  });

>>>>>>> 62ba72263506dd8b37c8dddd8c5d3064eb6764e2
  return (
    <View>
      <View>
        <Text>City Contacts</Text>
      </View>
      <View>
        <FlatList
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
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};

export default Contacts;
