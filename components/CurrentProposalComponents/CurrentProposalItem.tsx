import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CurrentPropsalTypes {
  title: string,
  description: string,
  location: string,
  vote: number,
  img: string,
}




const CurrentProposalInput: React.FC<CurrentPropsalTypes> = ({ title, description, location, vote, img}) => {
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

const styles = StyleSheet.create({})
export default CurrentProposalInput;
