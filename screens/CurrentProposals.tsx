/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CurrentProposalInput from '../components/CurrentProposalComponents/CurrentProposalItem';
import CurrentProposalCard from '../components/CurrentProposalComponents/CurrentProposalCard';

const CurrentProposalScreen = () => {
  const currentProposal = useSelector((state: RootState) => {
    return state.Proposals.currentProposal;
  });

  return (
		<View>
			<View>
				<Text> title to go here</Text>
			</View>
      <View>
        <FlatList
          data={currentProposal}
          renderItem={({ item }) => (
            <CurrentProposalCard
              title={item.title}
              description={item.description}
              location={item.location}
							img={item.img}
							vote={item.votes}
            />
          )}
        />
      </View>
    </View>
  );
};

export default CurrentProposalScreen;
