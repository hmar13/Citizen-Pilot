import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CustomButton from '../components/CustomButton';

const Dashboard = () => {
  const allNews = useSelector((state: RootState) => {
    return state.newsData.news;
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.newsCaption}>Latest News</Text>
        <ScrollView
          style={{ marginRight: 20 }}
          snapToInterval={350}
          decelerationRate={'fast'}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {allNews.map(item => (
            <View key={item.id} style={{ position: 'relative' }}>
              <Image style={styles.picture} source={{ uri: item.img }} />
              <View style={styles.textConteiner}>
                <Text style={styles.newsText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.text}
        data={[
          { text: 'Report a problem', backgroundColor: '#FF6B6B' },
          { text: 'Propose a solution', backgroundColor: '#FFEA00' },
          { text: 'What are we working on', backgroundColor: '#F7FFF7' },
          { text: 'Current proposals', backgroundColor: '#FFD166' },
        ]}
        renderItem={({ item }) => (
          <CustomButton
            text={item.text}
            backgroundColor={item.backgroundColor}
            onPress={() => {
              console.log(item);
            }}
          />
        )}
      />
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};
export default Dashboard;
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
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 42,
    marginBottom: 5,
  },
});
