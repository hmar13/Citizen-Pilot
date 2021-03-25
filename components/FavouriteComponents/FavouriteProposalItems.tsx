import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Divider, Card, Title, Paragraph } from 'react-native-paper';


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
              <View style={styles.voteContainer}>
                <Ionicons name="ios-thumbs-up-sharp" size={15} color="#3A4276" />
                <Text style={styles.vote}>{vote}</Text>

              </View> :
              <View style={styles.voteContainer}>
                <FontAwesome5 name="hammer" size={20} color="#3A4276" />
                <Text style={[styles.vote, { fontSize: 12 }]}>In progress</Text>
              </View>
          }
        </View>
      </TouchableOpacity>

      {/* TODO: modal should go into a new folder */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Card style={{ width: '110%', height: 490 }}>
            <Card.Content>
              <Card.Cover style={styles.cardCover} source={{ uri: img }} />
              <Title style={{ marginTop: 7 }}>{title}</Title>
              {
                vote !== undefined ?
                  <View style={[styles.voteContainer, { marginBottom: 10 }]}>
                    <MaterialIcons name="favorite" size={15} color="#ad0f5c" />
                    <Text style={styles.vote}>{vote}</Text>
                  </View> :
                  <View style={styles.voteContainer}>
                    <Text style={[styles.vote, { fontSize: 12, marginBottom: 10 }]}>In progress</Text>
                  </View>
              }
              <Divider />
              <Paragraph style={{ marginTop: 10 }}>{description}</Paragraph>
            </Card.Content>
          </Card>
          <Button style={styles.button} onPress={toggleModal}>close</Button>
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
  voteContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20
  },
  vote: {
    fontWeight: 'bold',
    paddingLeft: 8,
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
  textContainer: {
    width: 250,
    justifyContent: 'space-evenly',
  },
  modalView: {
    overflow: 'scroll',
    height: 600,
    width: 350,
    margin: 20,
    backgroundColor: '#F0F5F9',
    borderRadius: 20,
    padding: 30,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardCover: {
    borderRadius: 12,
    height: 220,
  },
  button: {
    marginRight: -25,
    marginTop: 15,
    alignSelf: 'flex-end'

  },
});
