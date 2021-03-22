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
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>News</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 85,
    width: 311,
    backgroundColor: 'yellow',
    borderBottomRightRadius: 53.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 30,
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
});
export default News;
