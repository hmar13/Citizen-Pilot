/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { Button, Divider, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CustomButton from '../components/CustomButton';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import newsInterface from '../interfaces/newsInterface';

const modalInitalState = {
  id: '1',
  title: 'News Title',
  category: 'Category',
  shortDescription: 'Description',
  longDescription: 'Description',
  location: 'In the city',
  img: 'img',
  date: 'date',
};

export default function Dashboard({ navigation }) {
  const [modalInfo, setModalInfo] = useState<newsInterface>(modalInitalState);
  const [isModalVisible, setModalVisible] = useState(false);
  const allNews = useSelector((state: RootState) => {
    return state.newsData.news;
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <HorizontalBanner />
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.newsCaption}>Latest News</Text>
        <FlatList
          style={{ marginRight: 20 }}
          decelerationRate="fast"
          snapToInterval={350}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={allNews}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>

            <TouchableOpacity
              onPress={() => {
                setModalInfo(item);
                setModalVisible(true);
              }}
            >
              <View key={item.id} style={{ position: 'relative' }}>
                <Image style={styles.picture} source={{ uri: item.img }} />
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
          {/* how do I make Paragraph scrollable? if there is too much text, it will spill over card*/}
          <Card style={{ width: '110%', height: 490 }}>
            <Card.Content>
              <Card.Cover style={styles.cardCover} source={{ uri: modalInfo.img }} />
              <Title style={{ marginTop: 7 }}>{modalInfo.title}</Title>
              <Divider />
              <Paragraph style={{ marginTop: 10 }}>{modalInfo.longDescription}</Paragraph>
            </Card.Content>
          </Card>
          <Button style={styles.button} icon="newspaper-variant-outline" mode="contained" onPress={() => console.log('navigation.navigate')}>
            More
          </Button>
        </View>
      </Modal>
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: 200,
    width: 320,
    marginLeft: 30,
    borderRadius: 20,
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
  textConteiner: {
    position: 'absolute',
    top: 140,
    left: 30,
    width: 320,
    height: '30%',
    backgroundColor: 'grey',
    opacity: 0.9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  newsText: {
    fontSize: 16,
    textAlign: 'center',
    width: 300,
    fontWeight: 'bold',
    top: 6,
    color: 'white',
  },
  newsCaption: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 42,
    marginBottom: 5,
    marginTop: '5%'
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
