import React, { Component, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import propAction from '../../store/actions/currentProposals'

interface CurrentPropsalTypes {
  id: number,
  title: string,
  description: string,
  location: string,
  votes: number,
  img: string,
}


const CurrentProposalCard: React.FC<CurrentPropsalTypes> = ({ id, title, description, location, votes, img }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const dispatch = useDispatch()
  const handleUpVote = (id: number) => {
    console.log('dispatched?', { payload: id, type: 'Increment' })
    dispatch(propAction(id))
  }


  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={styles.container}>
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.votes}>{votes} votes</Text>
          {/* <Paragraph style={styles.location}>{location}</Paragraph> */}
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Text>{title}</Text>
            <Text>Location: {location}</Text>
            <Image style={styles.modalImage} source={{ uri: img }} />
            <Text> {description}</Text>
            <Button title='add support' onPress={() => handleUpVote(id)}></Button>
            <Text> support {votes}</Text>
          </View>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};
export default CurrentProposalCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: 250,
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
  },
  location: {
  },
  votes: {
    alignSelf: 'flex-end',
    marginRight: 10,
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
  modalImage: {
    height: 200,
    width: 200,
  },
  modal__information__container: {
    alignItems: 'center',
  },
});

