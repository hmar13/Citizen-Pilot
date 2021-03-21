/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Alert, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { useDispatch } from 'react-redux';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import UrgentButton from '../components/ReportProblem/UrgentButtonComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
// import addNewReport from '../store/actions/report';

export default function ReportProblem(): JSX.Element {
  const [text, setText] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('Choose a category');

  // handles API call to save new problem to database
  function handleButtonClick() {
    if (categoryTitle === 'Choose a category') {
      Alert.alert('Please add a category');
    }
    // dispatch(addNewReport());
    setText('');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/banner-horizontal.png')}
        style={styles.image}
      />

      <ListAccordion
        setCategoryTitle={setCategoryTitle}
        categoryTitle={categoryTitle}
      />

      <View>
        <View style={styles.camera}>
          <Text style={styles.text}>Then take a picture</Text>
          <CameraComponent />
        </View>
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
        <UrgentButton />
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
    </View>
  );
}
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: '50%',
    borderRadius: 15,
  },
  category: {
    backgroundColor: 'white',
    height: height / 8,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 7,
    marginTop: 16,
  },
  camera: {
    backgroundColor: 'white',
    height: height / 6,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 7,
  },
  descriptionBox: {
    backgroundColor: 'white',
    height: height / 6,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  urgent: {
    marginTop: 7,
    backgroundColor: 'white',
    height: height / 10,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  input: {
    width: '90%',
    marginLeft: '5%',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
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
