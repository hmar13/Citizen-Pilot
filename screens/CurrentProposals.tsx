/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CurrentProposalCard from '../components/CurrentProposalComponents/CurrentProposalCard';

const CurrentProposalScreen = () => {
  const currentProposal = useSelector<RootState, any>(state => state.Proposals);
  return (
		<View style={{flex: 1}}>
			<View>
				<Text> Current Proposals</Text>
			</View>
      <View>
        <FlatList
          data={currentProposal}
          renderItem={({ item }) => (
            <CurrentProposalCard
              key={String(item.id)}
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
    </View>
  );
};
export default CurrentProposalScreen;