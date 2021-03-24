import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Divider, Card, Title, Paragraph, Avatar, IconButton, Colors } from 'react-native-paper';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import propAction from '../../store/actions/currentProposals'
import { MaterialIcons } from '@expo/vector-icons';


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
    <View style={{ flex: 1 }}>

      <Card style={styles.card__style}>
        <Card.Content>
          <Card.Cover style={styles.cardCover} source={{ uri: img }} />
          <Title style={{ marginTop: 7 }}>{title}</Title>

          <View style={[styles.vote__container, { marginBottom: 10 }]}>
            {/* grey color if user hasn't voted yet? */}
            <MaterialIcons name="favorite" size={15} color="#ad0f5c" />
            <Text style={styles.vote}>{votes}</Text>
          </View>
          <Divider />
          <Paragraph style={{ marginTop: 10 }}>{`${description.slice(0, 120)}...`}</Paragraph>
        </Card.Content>
        <Card.Actions style={{ alignSelf: 'flex-end' }}>
          <Button style={styles.button} onPress={toggleModal}>More</Button>
        </Card.Actions>
      </Card>

      <Modal isVisible={isModalVisible}>
        <ScrollView style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Avatar.Image size={120} source={{ uri: img }} />
            <Text style={styles.modal__title}>{title}</Text>
          </View>
          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>How many supporters does this project have? </Text>
            <Text>Currently: {votes}</Text>
          </View>

          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>Where is the project located? </Text>
            <Text>{location}</Text>
          </View>

          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>What is being planned? </Text>
            <Text>{description}</Text>
          </View>

          <View style={styles.modal__vote}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Give this project your vote and make your community a better place</Text>
            <IconButton
              icon="thumb-up"
              color={Colors.blue500}
              size={25}
              animated
              onPress={() => console.log('Pressed')}
            />
          </View>

          {/* <Button title='add support' onPress={() => handleUpVote(id)}></Button> */}
          <Button style={{ alignSelf: 'flex-end' }} onPress={toggleModal}>close</Button>
        </ScrollView>
      </Modal>
    </View>
  );
};
export default CurrentProposalCard;

const styles = StyleSheet.create({
  textContainer: {
    width: 250,
    justifyContent: 'space-around',
  },
  card__style: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 15,
    // height: 490,

  },
  cardCover: {
    borderRadius: 10,
    height: 220,
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
  },
  button: {
    marginTop: 15,
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
    paddingLeft: 6,
    fontStyle: 'italic',
  },
  votes: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  progress: {
    textAlign: 'right',
  },
  modal__container: {

    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  modalImage: {
    height: 200,
    width: 200,
  },
  modal__information__container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    flexWrap: 'wrap'

  },
  modal__title: {
    fontWeight: 'bold',
    fontSize: 20,

  },
  modal__textcontainer: {
    marginTop: 30,

  },
  modal__headers: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  modal__vote: {
    marginTop: '20%',
    alignItems: 'center'
  }
});

