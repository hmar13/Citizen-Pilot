/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import ListAccordion from '../components/ProposeSolution/ListAccordion';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ProposeSolution(): JSX.Element {
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('Choose a Location');
  const [imageUri, setImageUri] = useState('');

  function handleButtonClick() {
    if (categoryTitle === 'Choose a category') {
      Alert.alert('Please choose a location');
    }

    console.log('clicked!');

    setTitleText('');
    setDescriptionText('');
  }

  return (
    <View style={styles.container}>
      <HorizontalBannerComponent />

      <View style={styles.headerContainer}>
        <FontAwesome5 name="lightbulb" size={35} color="#3A4276" />
        <Text style={styles.headline}>Propose a solution</Text>
      </View>

      <ScrollView >
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Give your project a name</Text>
          <TextInput
            label="Title"
            value={titleText}
            mode="outlined"
            style={styles.titleInput}
            onChangeText={input => setTitleText(input)}
          />
        </View>
        <View style={styles.proposalContainer}>
          <Text style={styles.text}>What is your proposal about?</Text>
          <TextInput
            label="Tell us a little bit about your idea..."
            multiline
            numberOfLines={10}
            value={descriptionText}
            mode="outlined"
            style={styles.proposalInput}
            onChangeText={input => setDescriptionText(input)}

          />
        </View>

        <ListAccordion
          setCategoryTitle={setCategoryTitle}
          categoryTitle={categoryTitle}
        />
        <CameraComponent
          imageUri={imageUri}
          setImageUri={setImageUri}
          headerText="Your picture"
          needImage={true}
        />
        <Button
          icon="email-send"
          mode="contained"
          style={styles.button}
          onPress={handleButtonClick}
        >
          Submit
      </Button>
      </ScrollView>
    </View>
  );
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
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
  headline: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText: {
    marginLeft: 35,
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleContainer: {
    height: 120,
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 7,
    marginTop: 15,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
  titleInput: {
    width: '90%',
    height: 40,
    marginLeft: '5%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },

  proposalContainer: {
    height: 270,
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 7,
  },
  proposalInput: {
    width: '90%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
    marginTop: 20,
    textAlignVertical: 'top',
  },
  locationContainer: {
    height: 150,
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: '50%',
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 10,
  },
});
