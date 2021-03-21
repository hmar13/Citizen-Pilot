/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ProjectItems from '../components/ProjectComponents/ProjectItems';

const Projects = () => {
  const allProjects = useSelector((state: RootState) => {
    return state.cityProjects.projects;
  });

  return (
    <View>
      <View>
        <Text>What are we working on</Text>
        <Text>Here are all of the Projects happening in the area:</Text>
      </View>
      <View>
        <FlatList
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
      </View>
    </View>
  );
};

export default Projects;
