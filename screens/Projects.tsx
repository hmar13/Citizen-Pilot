/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ProjectItems from '../components/ProjectComponents/ProjectItems';

const Projects = () => {
  const allProjects = useSelector((state: RootState) => {
    return state.cityProjects.projects;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
        <Text>What we are working on</Text>
        <Text>Here are all the current proposals</Text>
      </View>
      <FlatList
        style={styles.flatlist__container}
        data={allProjects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProjectItems
            title={item.title}
            description={item.description}
            location={item.location}
            projectedCompletion={item.projectedCompletion}
            img={item.img}
          />
        )}
      />
      <Text>Navigation Goes Here</Text>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header__container: {
    backgroundColor: 'white',
    marginRight: 20,
    marginBottom: 15,
    borderBottomRightRadius: 30,
  },
  flatlist__container: {
    paddingHorizontal: 25,
  },
});
