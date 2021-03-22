/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import FavouriteProposalItems from '../components/FavouriteComponents/FavouriteProposalItems';
import FavourteProjectItems from '../components/FavouriteComponents/FavouriteProjectItems';

const Favourites = () => {
  const myFavourites = useSelector((state: RootState) => {
    return state.myFavourites.favourites;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header__text}>My Favourites</Text>
      </View>
      <Text style={styles.header__text}>Proposals</Text>
      <FlatList
        style={styles.flatlist__container}
        data={myFavourites}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          item.votes ? (
            <FavouriteProposalItems
              title={item.title}
              description={item.description}
              location={item.location}
              vote={item.votes}
              img={item.img}
            />
          ) : null
        }
      />
      <Text style={styles.header__text}>Projects</Text>
      <FlatList
        style={styles.flatlist__container}
        data={myFavourites}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          !item.votes ? (
            <FavourteProjectItems
              title={item.title}
              description={item.description}
              location={item.location}
              img={item.img}
            />
          ) : null
        }
      />
      <Text style={styles.footer__container}>Navigation Goes Here</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header__container: {
    backgroundColor: 'white',
    marginRight: 25,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    height: 70,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  header__text: {
    alignSelf: 'center',
  },
  flatlist__container: {
    paddingHorizontal: 25,
  },
  footer__container: {
    backgroundColor: 'white',
  },
});
