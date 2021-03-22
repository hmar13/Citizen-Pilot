import React from 'react';
import { Text, View } from 'react-native';

interface ContactItemsInterface {
  title: string;
  phoneNumber: string;
  email: string;
  img: string;
}

const ContactItems: React.FC<ContactItemsInterface> = ({
  title,
  phoneNumber,
  email,
  img,
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{phoneNumber}</Text>
      <Text>{email}</Text>
      <Text>{img}</Text>
    </View>
  );
};

export default ContactItems;
