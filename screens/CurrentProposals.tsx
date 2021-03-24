/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CurrentProposalCard from '../components/CurrentProposalComponents/CurrentProposalCard';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function CurrentProposalScreen(): JSX.Element {
  const currentProposal = useSelector<RootState, any>(state => state.Proposals);
  return (
    <View style={styles.container}>
      <HorizontalBanner />
      <View style={styles.header__container}>
        <MaterialCommunityIcons name="vote" size={35} color="#3A4276" />
        <Text style={styles.header__text}>Vote</Text>
      </View>
      <FlatList
        data={currentProposal}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CurrentProposalCard
            id={item.id}
            title={item.title}
            description={item.description}
            location={item.location}
            img={item.img}
            votes={item.votes}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
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
})
