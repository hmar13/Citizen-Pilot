import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface FavouriteProposalItemsInterface {
  title: string,
  description: string,
  location: string,
  vote: number,
  img: string,
}

const FavouriteProposalItems:React.FC<FavouriteProposalItemsInterface> = ({ title, description, location, vote, img}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{location}</Text>
      <Text>{vote}</Text>
      <Text>{img}</Text>
    </View>
  )
}

export default FavouriteProposalItems;

const styles = StyleSheet.create({});