import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProjectItemsInterface {
  title: string,
  description: string,
  location: string,
  projectedCompletion: string,
  img: string,
}

const ProjectItems:React.FC<ProjectItemsInterface> = ({ title, description, location, projectedCompletion, img}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{location}</Text>
      <Text>{projectedCompletion}</Text>
      <Text>{img}</Text>
    </View>
  )
}
;
export default ProjectItems;

const styles = StyleSheet.create({});