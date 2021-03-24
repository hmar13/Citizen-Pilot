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
import { TextInput, Button } from 'react-native-paper';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import UrgentButton from '../components/ReportProblem/UrgentButtonComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
import MapPinDrop from '../components/MapComponent/MapViewComponent';
import HorizontalBanner from '../components/HorizontalBannerComponent';
import { Foundation } from '@expo/vector-icons';


// import addNewReport from '../store/actions/report';

export default function ReportProblem(): JSX.Element {
  const [text, setText] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('Choose a category');
  const [imageUri, setImageUri] = useState('');
  const [urgency, setUrgency] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  // handles API call to save new problem to database
  function handleButtonClick() {
    if (categoryTitle === 'Choose a category') {
      Alert.alert('Please add a category');
    }

    console.log(latitude, longitude);
    // dispatch(addNewReport());
    setText('');
  }

  return (
    <ScrollView style={styles.container}>
      <HorizontalBanner />
      <View style={styles.header__container}>
        <Foundation name="alert" size={35} color="#3A4276" />
        <Text style={styles.header__text}>Report a problem</Text>
      </View>

      <ListAccordion
        setCategoryTitle={setCategoryTitle}
        categoryTitle={categoryTitle}
      />

      <View>
        <CameraComponent
          imageUri={imageUri}
          setImageUri={setImageUri}
          headerText="Then take a picture"
          needImage={false}
        />

        <View style={styles.descriptionBox}>
          <Text style={styles.text}>Write a brief description</Text>
          <TextInput
            label="Description"
            multiline
            value={text}
            mode="outlined"
            style={styles.input}
            onChangeText={input => setText(input)}
          />
        </View>
      </View>

      <View style={styles.urgent}>
        <Text style={styles.text}>How urgent is your problem?</Text>
        <UrgentButton setUrgency={setUrgency} />
      </View>

      <View style={styles.map}>
        <Text style={styles.mapText}>Drag the pin to where the problem is</Text>
        <MapPinDrop
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      </View>

      <View style={styles.bottom}>
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
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
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
