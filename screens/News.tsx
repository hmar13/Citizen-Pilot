/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { RootState } from '../store/reducer';
import newsInterface from '../interfaces/newsInterface';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import IconComponent from '../components/NewsComponents/IconComponent';
import { FontAwesome } from '@expo/vector-icons';
import SortByCategory from '../components/NewsComponents/SortByCategory';
import { Button, Divider, Card, Title, Paragraph } from 'react-native-paper';


const modalInitalState = {
  id: '1',
  title: 'News Title',
  category: 'Category',
  shortDescription: 'Description',
  longDescription: 'Description',
  location: 'In the city',
  image: 'img',
  date: 'date',
};

const News = () => {
  const [modalInfo, setModalInfo] = useState<newsInterface>(modalInitalState);
  const [isModalVisible, setModalVisible] = useState(false);

  const allNews = useSelector((state: RootState) => {
    return state.realNews.state;
  });

  const [selectedNews, setSelectedNews] = useState(allNews);

  const sortCategory = (categoryName: string) => {
    if (categoryName === 'All') {
      return setSelectedNews(allNews);
    }
    const chosenNews = allNews.filter((newsItem: any) => newsItem.categories.includes(categoryName))
    if (chosenNews.length === 0) return;
    setSelectedNews(chosenNews);
  }

  return (
    <Provider >
      <HorizontalBannerComponent />
      <View style={styles.headerContainer}>
        <FontAwesome name="newspaper-o" size={35} color="#3A4276" />
        <Text style={styles.headerText}>News</Text>
      </View>

      <SortByCategory sortCategory={sortCategory} />
      {
        allNews.length === 0 &&
        <View>
          <Text style={styles.noNewsText}>Sorry! {'\n'} There aren't any public announcements at the moment</Text>
        </View>

      }
      <FlatList
        style={styles.flatlistContainer}
        data={selectedNews}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (


          <TouchableOpacity onPress={() => {
            setModalInfo(item);
            setModalVisible(true);
          }}>
            <View style={styles.container}>
              <IconComponent category={item.categories} />
              <View style={styles.secondColumn}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.description}>{item.shortDescription}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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

          <Button style={styles.button} onPress={() => setModalVisible(false)}>
            close
          </Button>
        </View>
      </Modal>
    </Provider>
  );
};



const styles = StyleSheet.create({
  container: {
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
  noNewsText: {
    marginTop: '50%',
    color: 'black',
    textAlign: 'center'
  },
  banner: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: 50,
  },
  cardCover: {
    borderRadius: 12,
    height: 220,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 45,
    width: '40%',
    marginTop: 20,
    marginRight: -40,
  },

  flatlistContainer: {
    paddingHorizontal: 25,
  },
  secondColumn: {
    justifyContent: 'center',

    marginTop: 10,
    paddingRight: 4,
    marginLeft: '8%',
    width: '75%',
    height: '90%',
  },
  textBox: {
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  newsContainer: {
    height: 55,
    width: 250,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  newsText: {
    fontSize: 20,
    marginLeft: 10,
  },
  modalView: {
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
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  }
});
export default News;
