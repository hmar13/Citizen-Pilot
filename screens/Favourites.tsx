/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import FavouriteProposalItems from '../components/FavouriteComponents/FavouriteProposalItems';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { MaterialIcons } from '@expo/vector-icons';

const Favourites = () => {
  const myFavourites = useSelector((state: RootState) => {
    return state.myFavourites.favourites;
  });

  return (
    <View style={styles.container}>
      <HorizontalBannerComponent />
      <View style={styles.headlineContainer}>
        <MaterialIcons name="favorite" size={35} color="#ad0f5c" />
        <Text style={styles.headerText}>Favourites</Text>
      </View>
      <FlatList
        style={styles.flatlistContainer}
        data={myFavourites}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <FavouriteProposalItems
            title={item.title}
            description={item.description}
            location={item.location}
            vote={item.votes}
            img={item.img}
          />
        }
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headlineContainer: {
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
  },
  flatlistContainer: {
    paddingHorizontal: 25,
  },
});
