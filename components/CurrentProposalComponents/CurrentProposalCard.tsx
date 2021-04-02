import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Divider, Card, Title, Paragraph, Avatar, IconButton, Colors } from 'react-native-paper';
import Modal from 'react-native-modal';
import { fetchProposals, fetchVotes } from '../../store/actions/dashboard';
import { postVote, addFavourite } from '../../services/Apiclient';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import { MaterialIcons } from '@expo/vector-icons';
import CurrentPropsalTypes from '../../interfaces';


const CurrentProposalCard: React.FC<CurrentPropsalTypes> = ({ id, title, description, location, votes, img }) => {
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const token: string = useSelector((state: RootState) => {
    return state.user.userData.token;
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const storeVotes = useSelector((state: RootState) => state.votes.state);
  const filteredVotes = storeVotes.map((vote: any) => vote.proposalId)


  useEffect(() => {
    const proposals = fetchProposals();
    dispatch(proposals);
    const votes = fetchVotes(token);
    dispatch(votes);
  }, [render])


  const handleUpVote = (id: number) => {
    addFavourite(token, id)
    postVote(token, id);
    setRender(!render);
    toggleModal();
  }

  return (
    <View style={{ flex: 1 }}>

      <Card style={styles.cardStyle}>
        <Card.Content>
          <Card.Cover style={styles.cardCover} source={{ uri: img }} />
          <Title style={{ marginTop: 7 }}>{title}</Title>

          <View style={[styles.voteContainer, { marginBottom: 10 }]}>
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
        <ScrollView style={styles.modalContainer}>
          <View style={styles.modalInformationContainer}>
            <Avatar.Image size={120} source={{ uri: img }} />
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalHeaders}>How many supporters does this project have? </Text>
            <Text>Currently: {votes}</Text>
          </View>

          <View style={styles.modalTextContainer}>
            <Text style={styles.modalHeaders}>Where is the project located? </Text>
            <Text>{location}</Text>
          </View>

          <View style={styles.modalTextContainer}>
            <Text style={styles.modalHeaders}>What is being planned? </Text>
            <Text>{description}</Text>
          </View>

          {
            (filteredVotes.includes(id)) ?
              <View style={styles.modalVote}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 30 }}>
                  You've already voted for this project!
                </Text>
              </View>
              :
              <View style={styles.modalVote}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Give this project your vote and make your community a better place
                </Text>
                <IconButton
                  icon="thumb-up"
                  color={Colors.blue500}
                  size={25}
                  animated
                  onPress={() => handleUpVote(id)}
                />
              </View>
          }

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
  cardStyle: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 15,
  },
  cardCover: {
    borderRadius: 10,
    height: 220,
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
  modalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  modalImage: {
    height: 200,
    width: 200,
  },
  modalInformationContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalTextContainer: {
    marginTop: 30,
  },
  modalHeaders: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  modalVote: {
    marginTop: '20%',
    alignItems: 'center'
  },
});

