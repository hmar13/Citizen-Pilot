import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Modal from 'react-native-modal';

interface FavouriteProposalItemsInterface {
  title: string;
  description: string;
  location: string;
  vote: number;
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
      <TouchableOpacity onPress={toggleModal}>
        <Card style={styles.container}>
          <Card.Content>
            <Title style={styles.title}>{title}</Title>
            <Paragraph style={styles.location}>Location: {location}</Paragraph>
            <Paragraph style={styles.vote}>Votes: {vote}</Paragraph>
          </Card.Content>
        </Card>
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
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    textAlign: 'left',
  },
  location: {
    textAlign: 'left',
  },
  vote: {
    textAlign: 'right',
  },
  modal__container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  image: {
    height: 200,
    width: 200,
  },
  modal__information__container: {
    alignItems: 'center',
  },
});
