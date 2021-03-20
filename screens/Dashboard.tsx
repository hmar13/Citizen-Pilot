import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/reducer';

const Dashboard = () => {
  const allNews = useSelector((state: RootState) => {
    return state.newsData.news;
  });
  console.log(allNews);
  return (
    <View>
      <View>
        <FlatList
          data={allNews}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ position: 'relative' }}>
              <Image style={styles.picture} source={{ uri: item.img }} />
              <View style={styles.textConteiner}>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
          horizontal={true}
        />
      </View>
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  picture: {
    height: 200,
    width: 250,
    marginLeft: 10,
    borderRadius: 20,
  },

  textConteiner: {
    position: 'absolute',
    top: 130,
    left: 20,
    width: 230,
    height: 100,
    backgroundColor: 'grey',
  },
});
