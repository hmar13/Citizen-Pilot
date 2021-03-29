/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Text,
  ScrollView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { uploadImage } from '../services/Firebaseclient';
import { postProblem } from '../services/Apiclient';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import UrgentButton from '../components/ReportProblem/UrgentButtonComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
import MapPinDrop from '../components/MapComponent/MapViewComponent';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import MessageReceivedModal from './MessageReceivedModal';
import { Foundation } from '@expo/vector-icons';


export default function ReportProblem({ navigation }): JSX.Element {
  const [isModalVisible, setModalVisible] = useState(false);
  const [description, setText] = useState('');
  const [category, setCategory] = useState('Choose a category');
  const [image, setImageUri] = useState('');
  const [urgency, setUrgency] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const token: string = useSelector((state: RootState) => {
    return state.user.userData.token;
  });



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);


  const handleButtonClick = async () => {
    if (category === 'Choose a category') {
      return Alert.alert('Please add a category');
    }
    if (image.length === 0 || description.length === 0) {
      return Alert.alert('Please add a picture or add a description');
    }

    const imageurl = await uploadImage(image, 'reportedProblems', description);

    const details = {
      "urgency": urgency,
      "description": description,
      "longitude": longitude,
      "latitude": latitude,
      "category": category,
      "image": imageurl
    }
    // code to url encode
    const formBody = [];
    for (let property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    };
    const result = formBody.join("&");

    await postProblem(token, result);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Dashboard');
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <HorizontalBanner />
      <View style={styles.headerContainer}>
        <Foundation name="alert" size={35} color="#3A4276" />
        <Text style={styles.headerText}>Report a problem</Text>
      </View>

      <ScrollView >
        <ListAccordion
          setCategory={setCategory}
          category={category}
        />
        {
          (category !== 'Choose a category') &&
          <View>
            <CameraComponent
              imageUri={image}
              setImageUri={setImageUri}
              headerText="Then take a picture"
              needImage={false}
            />
          </View>

        }
        {
          (image.length !== 0) &&
          <View>
            <View style={styles.descriptionBox}>
              <Text style={styles.text}>Write a brief description</Text>
              <TextInput
                label="Description"
                multiline
                value={description}
                mode="outlined"
                style={styles.input}
                onChangeText={input => setText(input)}
              />
            </View>
          </View>
        }
        {
          description.length !== 0 &&
          <View style={styles.urgent}>
            <Text style={styles.text}>How urgent is your problem?</Text>
            <UrgentButton setUrgency={setUrgency} />
          </View>
        }

        {
          (urgency !== null) &&
          <View style={styles.map}>
            <Text style={styles.mapText}>Drag the pin to where the problem is</Text>
            <MapPinDrop
              latitude={latitude}
              setLatitude={setLatitude}
              longitude={longitude}
              setLongitude={setLongitude}
            />
          </View>
        }

        <View style={styles.bottom}>
          <MessageReceivedModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
          <Button
            icon="email-send"
            mode="contained"
            style={styles.button}
            onPress={handleButtonClick}
          >
            Submit
        </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');
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
  headerText: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: '50%',
    borderRadius: 15,
  },
  bottom: {
    marginTop: '7%',
    paddingBottom: 50,
  },
  descriptionBox: {
    backgroundColor: 'white',
    height: 138,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  urgent: {
    marginTop: 7,
    backgroundColor: 'white',
    height: 90,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  map: {
    marginTop: 7,
    backgroundColor: 'white',
    height: 360,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
  },
  mapText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
  },
  input: {
    width: '90%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  image: {
    width,
    height: '10%',
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
});
