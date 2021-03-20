import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/reducer';

const Contacts = () => {
  const allContacts = useSelector((state: RootState) => {
    return state.cityContacts.contacts;
  });
  return (
    <View>
      <View>
        <Text>City Contacts</Text>
      </View>
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};
export default Contacts;
const styles = StyleSheet.create({});
