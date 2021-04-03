/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducer';
import { fetchFavourites } from '../store/actions/dashboard';
import FavouriteProposalItems from '../components/FavouriteComponents/FavouriteProposalItems';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { MaterialIcons } from '@expo/vector-icons';


export default function Favourites(): JSX.Element {
  const dispatch = useDispatch();

  const myFavourites = useSelector((state: RootState) => {
    return state.realFavourites.state;
  });

  const token: string = useSelector((state: RootState) => {
    return state.user.userData.token;
  });


  useEffect(() => {
    const favourites = fetchFavourites(token);
    dispatch(favourites);
  }, [])


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
        ListEmptyComponent={
          <Text style={styles.text}>You haven't saved any favourites yet{'\n'}
          </Text>

        }
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <FavouriteProposalItems
            title={item.title}
            description={item.description}
            location={item.location}
            vote={item.votes}
            img={item.image}
          />
        }
      />
    </View>
  );
};

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
  text: {
    marginTop: '50%',
    color: 'black',
    textAlign: 'center'
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
