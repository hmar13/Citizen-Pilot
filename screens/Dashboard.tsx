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
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CustomButton from '../components/CustomButton';
import HorizontalBanner from '../components/HorizontalBannerComponent';
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
            // TODO: go from here to news page. No extra modal required
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
          <Text>{modalInfo.longDescription}</Text>
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
    marginLeft: 10,
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
