import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

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
  // img,
}) => {
  return (
    <View>
      <Card style={styles.container}>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Phone: {phoneNumber}</Paragraph>
          <Paragraph>Email: {email}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ContactItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
  },
});
