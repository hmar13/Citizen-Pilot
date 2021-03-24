import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
// import { Card, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';

interface FavouriteProjectItemsInterface {
  title: string;
  description: string;
  location: string;
  img: string;
}

const FavouriteProjectItems: React.FC<FavouriteProjectItemsInterface> = ({
  title,
  description,
  location,
  img,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.container}>
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{location} location</Text>
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Text>{title}</Text>
            <Image style={styles.image} source={{ uri: img }} />
            <Text>Information: {description}</Text>
            <Text>Location: {location}</Text>
          </View>
          <Button title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default FavouriteProjectItems;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 350,
    borderRadius: 12,
    backgroundColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,

  },
  image: {
    height: 120,
    width: 105,
    borderRadius: 12,
  },
  textContainer: {
    width: 250,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingLeft: 6,
  },
  location: {
    paddingLeft: 6,
    fontStyle: 'italic',
  },
  progress: {
    textAlign: 'right',
  },
  modal__container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  modal__information__container: {
    alignItems: 'center',
  },
});
