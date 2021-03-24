import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


interface FavouriteProposalItemsInterface {
  title: string;
  description: string;
  location: string;
  vote?: number;
  img: string;
}

const FavouriteProposalItems: React.FC<FavouriteProposalItemsInterface> = ({
  title,
  description,
  location,
  vote,
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
          <Text style={styles.location}>Location: {location}</Text>
          {
            vote !== undefined ?
              <View style={styles.vote__container}>
                <Ionicons name="ios-thumbs-up-sharp" size={15} color="#3A4276" />
                <Text style={styles.vote}>{vote}</Text>

              </View> :
              <View style={styles.vote__container}>
                <FontAwesome5 name="hammer" size={20} color="#3A4276" />
                <Text style={[styles.vote, { fontSize: 12 }]}>In progress</Text>

              </View>

          }
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Text>{title}</Text>
            <Image style={styles.image} source={{ uri: img }} />
            <Text>Information: {description}</Text>
            <Text>Location: {location}</Text>
            <Text>Votes: {vote}</Text>
          </View>
          <Button title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default FavouriteProposalItems;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 350,
    borderRadius: 13,
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
    borderRadius: 13,
  },
  vote__container: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20
  },
  vote: {
    fontWeight: 'bold',
    paddingLeft: 8,

    // alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
  location: {
    paddingLeft: 6,
    fontStyle: 'italic',
  },
  modal__container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  textContainer: {
    width: 250,
    justifyContent: 'space-evenly',
  },
  modal__information__container: {
    alignItems: 'center',
  },
});
