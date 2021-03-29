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
import { postProposal } from '../services/Apiclient';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import MessageReceivedModal from './MessageReceivedModal';
import ListAccordion from '../components/ProposeSolution/ListAccordion';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ProposeSolution({ navigation }): JSX.Element {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitleText] = useState('');
  const [description, setDescriptionText] = useState('');
  const [location, setCategoryTitle] = useState('Choose a Location');
  const [image, setImageUri] = useState('');

  const token: string = useSelector((state: RootState) => {
    return state.user.userData.token;
  });

  const details = {
    "title": title,
    "description": description,
    "location": location,
    "image": image,
    "votes": 0,
    "approved": false
  }


  async function handleButtonClick() {
    if (title.length === 0 || description.length === 0) {
      return Alert.alert('Please add a title or description');
    }
    if (location === 'Choose a Location') {
      return Alert.alert('Please choose a location');
    }
    if (image.length === 0) {
      return Alert.alert('Please add an image');
    }

    // code to url encode
    const formBody = [];
    for (let property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    };
    const result = formBody.join("&");

    await postProposal(token, result);

    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Dashboard');
    }, 1600);

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
            value={title}
            mode="outlined"
            style={styles.titleInput}
            onChangeText={input => setTitleText(input)}
          />
        </View>

        {
          (title.length > 0) &&
          <View style={styles.proposalContainer}>
            <Text style={styles.text}>What is your proposal about?</Text>
            <TextInput
              label="Tell us a little bit about your idea..."
              multiline
              numberOfLines={10}
              value={description}
              mode="outlined"
              style={styles.proposalInput}
              onChangeText={input => setDescriptionText(input)}

            />
          </View>
        }
        {
          (description.length > 0) &&
          <ListAccordion
            setCategoryTitle={setCategoryTitle}
            categoryTitle={location}
          />
        }
        {
          (location !== 'Choose a Location') &&
          <CameraComponent
            imageUri={image}
            setImageUri={setImageUri}
            headerText="Your picture"
            needImage={true}
          />
        }
        <MessageReceivedModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
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
