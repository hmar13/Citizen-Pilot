/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import UrgentButton from '../components/ReportProblem/UrgentButtonComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
// import addNewReport from '../store/actions/report';

export default function ReportProblem(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  // handles API call to save new problem to database
  function handleButtonClick() {
    // dispatch(addNewReport());
    setText('');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/banner-horizontal.png')}
        style={styles.image}
      />
      <ListAccordion />
      <View>
        <CameraComponent />
        <TextInput
          label="Description"
          multiline
          value={text}
          mode="outlined"
          style={styles.input}
          onChangeText={input => setText(input)}
        />
      </View>
      <UrgentButton />
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
});
