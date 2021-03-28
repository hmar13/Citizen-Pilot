/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducer';
import CurrentProposalCard from '../components/CurrentProposalComponents/CurrentProposalCard';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fetchProposals } from '../store/actions/dashboard';

export default function CurrentProposalScreen(): JSX.Element {
  const dispatch = useDispatch();
  const currentProposal = useSelector<RootState, any>(state => state.realProposals.state);

  useEffect(() => {
    const proposals = fetchProposals();
    dispatch(proposals);
  }, [currentProposal])



  return (
    <View style={styles.container}>
      <HorizontalBanner />
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons name="vote" size={35} color="#3A4276" />
        <Text style={styles.headerText}>Vote</Text>
      </View>
      {
        currentProposal.length === 0 &&
        <View style={{ marginLeft: 20, marginTop: '5%' }}>
          <Text style={styles.noProposalText}>Sorry, there isn't anything to vote on at the moment</Text>
        </View>

      }
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
  headerContainer: {
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
  noProposalText: {
    paddingLeft: 15,
    fontSize: 16,
    width: 300,
    fontWeight: 'bold',
    top: 6,
    color: 'black',
  },
})
