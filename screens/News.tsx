/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { RootState } from '../store/reducer';
import newsInterface from '../interfaces/newsInterface';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { FontAwesome } from '@expo/vector-icons';

const modalInitalState = {
  id: '1',
  title: 'News Title',
  shortDescription: 'Description',
  longDescription: 'Description',
  location: 'In the city',
  img: 'img',
  date: 'date',
};

const News = () => {
  const [modalInfo, setModalInfo] = useState<newsInterface>(modalInitalState);
  const [isModalVisible, setModalVisible] = useState(false);

  const allNews = useSelector((state: RootState) => {
    return state.newsData.news;
  });

  return (
    <ScrollView >
      <HorizontalBannerComponent />
      <View style={styles.header__container}>
        <FontAwesome name="newspaper-o" size={35} color="#3A4276" />
        <Text style={styles.header__text}>News</Text>
      </View>


      <FlatList
        data={allNews}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setModalInfo(item);
              setModalVisible(true);
            }}
          >
            <View style={styles.newsContainer}>
              <Text style={styles.newsText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 50,
        }}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Text>{modalInfo.longDescription}</Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({


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
    height: 420,
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
  header__container: {
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
  header__text: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  }
});
export default News;
