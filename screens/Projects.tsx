/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ProjectItems from '../components/ProjectComponents/ProjectItems';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { FontAwesome5 } from '@expo/vector-icons';


const Projects = () => {
  const allProjects = useSelector((state: RootState) => {
    return state.cityProjects.projects;
  });

  return (
    <View style={styles.container}>
      <HorizontalBannerComponent />
      <View style={styles.header__container}>
        <FontAwesome5 name="hammer" size={35} color="#3A4276" />
        <Text style={styles.header__text}>Work in progress</Text>
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
      <Text style={styles.footer__container}>Navigation Goes Here</Text>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
  },
  flatlist__container: {
    paddingHorizontal: 25,
  },
  footer__container: {
    backgroundColor: 'white',
  },
});
