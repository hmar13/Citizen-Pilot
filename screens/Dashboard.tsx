import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchNews,
  fetchContacts,
  fetchProjects,
  fetchProposals,
  fetchFavourites,
  fetchVotes
}
  from '../store/actions/dashboard';
import { Button, Divider, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { RootState } from '../store/reducer';
import CustomButton from '../components/CustomButton';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import { newsInterface } from '../interfaces';
import AskForHelp from '../components/DashboardComponents/AskForHelpComponent';


const modalInitalState = {
  id: 1,
  title: 'News Title',
  category: 'Category',
  shortDescription: 'Description',
  longDescription: 'Description',
  location: 'In the city',
  image: 'img',
  date: 'date',
};

export default function Dashboard({ navigation }): JSX.Element {
  const dispatch = useDispatch();
  const [modalInfo, setModalInfo] = useState<newsInterface>(modalInitalState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const allNews = useSelector((state: RootState) => {
    return state.realNews.state;
  });

  const token: string = useSelector((state: RootState) => {
    return state.user.userData.token;
  });



  useEffect(() => {
    const news = fetchNews();
    dispatch(news);
    const contacts = fetchContacts();
    dispatch(contacts);
    const projects = fetchProjects();
    dispatch(projects);
    const proposals = fetchProposals();
    dispatch(proposals);
    const favourites = fetchFavourites(token);
    dispatch(favourites);
    const votes = fetchVotes(token);
    dispatch(votes);
  }, [])

  const showDialog = () => setIsDialogVisible(true);

  return (
    <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <HorizontalBanner />
      <View style={{ justifyContent: 'center' }}>
        <View style={styles.headerContainer}>

          <Text style={styles.newsCaption}>Latest News</Text>
          <AskForHelp
            isDialogVisible={isDialogVisible}
            setIsDialogVisible={setIsDialogVisible}
          />
          <IconButton
            style={{ paddingTop: 5 }}
            icon="help-circle"
            color={'#ee9a2f'}
            size={22}
            onPress={showDialog}
          />
        </View>
        {
          (allNews === undefined || allNews.length === 0) &&
          <View>
            <Image
              style={styles.picture}
              source={require('../assets/images/stockimages/Reminders.jpg')}
            />
            <View style={styles.textConteiner}>
              <Text style={styles.newsText}>There is nothing to report at the moment</Text>
            </View>
          </View>

        }
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={allNews}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => {
                setModalInfo(item);
                setModalVisible(true);
              }}
            >
              <View >
                <Image style={styles.picture} source={{ uri: item.image }} />
                <View style={styles.textConteiner}>
                  <Text style={styles.newsText}>{item.shortDescription}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }>
        </FlatList>
      </View>

      <CustomButton navigation={navigation} />


      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Card style={{ width: '110%', height: 490 }}>
            <Card.Content>
              <Card.Cover style={styles.cardCover} source={{ uri: modalInfo.image }} />
              <Title style={{ marginTop: 7 }}>{modalInfo.title}</Title>
              <Divider />
              <Paragraph style={{ marginTop: 10 }}>{modalInfo.longDescription}</Paragraph>
            </Card.Content>
          </Card>
          <Button style={styles.button} icon="newspaper-variant-outline" mode="contained" onPress={() => {
            setModalVisible(false);
            navigation.navigate('news');
          }}>
            More
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: 200,
    width: 325,
    marginLeft: 30,
    borderRadius: 20,
  },
  imageContainer: {
    marginLeft: 5,
  },
  textConteiner: {
    position: 'absolute',
    top: 140,
    left: 30,
    width: 325,
    height: '30%',
    backgroundColor: 'grey',
    opacity: 0.9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 45,
    width: '40%',
    borderRadius: 15,
    marginTop: 20,
  },
  cardCover: {
    borderRadius: 12,
    height: 220,
  },
  newsText: {
    paddingLeft: 15,
    fontSize: 16,
    textAlign: 'center',
    width: 300,
    fontWeight: 'bold',
    top: 6,
    color: 'white',
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 40,
    marginRight: 10,
    marginBottom: 10,

  },
  newsCaption: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modalView: {
    overflow: 'scroll',
    height: 610,
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
});
