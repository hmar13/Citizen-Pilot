import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ProjectItems from '../components/ProjectComponents/ProjectItems';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { FontAwesome5 } from '@expo/vector-icons';


const Projects = () => {
  const allProjects = useSelector((state: RootState) => {
    return state.realProjects.state;
  });

  return (
    <View style={styles.container}>
      <HorizontalBannerComponent />
      <View style={styles.headerContainer}>
        <FontAwesome5 name="hammer" size={35} color="#3A4276" />
        <Text style={styles.headerText}>Work in progress</Text>
      </View>
      {
        allProjects.length === 0 &&
        <View>
          <Text style={styles.newsText}>Sorry! {'\n'} There are no projects happening right now.</Text>
        </View>

      }
      <FlatList
        style={styles.flatlistContainer}
        data={allProjects}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProjectItems
            title={item.title}
            description={item.description}
            location={item.location}
            projectedCompletion={item.completion}
            img={item.image}
          />
        )}
      />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  flatlistContainer: {
    paddingHorizontal: 25,
  },
  newsText: {
    marginTop: '50%',
    color: 'black',
    textAlign: 'center'
  },
});
