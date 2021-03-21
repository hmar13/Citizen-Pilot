/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import FavouriteProposalItems from '../components/FavouriteComponents/FavouriteProposalItems';
import FavourteProjectItems from '../components/FavouriteComponents/FavouriteProjectItems';

const Favourites = () => {
  const myFavourites = useSelector((state: RootState) => {
    return state.myFavourites.favourites;
  });

  return (
    <View>
      <View>
        <Text>My Favourites</Text>
      </View>
      <View>
        <Text>Proposals</Text>
        <FlatList
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
      </View>
      <View>
        <Text>Projects</Text>
        <FlatList
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
      </View>
    </View>
  );
};

export default Favourites;
