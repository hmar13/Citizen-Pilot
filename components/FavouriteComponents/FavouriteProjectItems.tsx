import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface FavouriteProjectItemsInterface {
  title: string,
  description: string,
  location: string,
  img: string,
}

const FavouriteProjectItems:React.FC<FavouriteProjectItemsInterface> = ({ title, description, location, img}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{location}</Text>
      <Text>{img}</Text>
    </View>
  )
}

export default FavouriteProjectItems;

const styles = StyleSheet.create({});