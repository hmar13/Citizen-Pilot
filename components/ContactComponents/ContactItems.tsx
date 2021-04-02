import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ContactItemsInterface from '../../interfaces'

const ContactItems: React.FC<ContactItemsInterface> = ({
  title,
  phoneNumber,
  email,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require('../../assets/images/banner.png')}
        />
      </View>
      <View style={styles.secondColumn}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.phone}>Phone: {phoneNumber}</Text>
          <Text style={styles.phone}>Email: {email}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 12,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 3,
  },
  banner: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: 50,
  },
  secondColumn: {
    justifyContent: 'space-around',
    marginTop: 10,
    paddingRight: 4,
    marginLeft: '8%',
    width: '75%',
    height: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});
