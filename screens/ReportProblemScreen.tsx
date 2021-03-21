import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';
import addNewReport from '../store/actions/report';

export default function ReportProblem(): JSX.Element {
  const dispatch = useDispatch();
  const oldReports = useSelector((state: RootState) => {
    return state.reportProblem.reportedProblem;
  });
  const [text, setText] = React.useState('');

  // handles API call to save new problem to database
  function handleButtonClick() {
    // dispatch(addNewReport());
    setText('');
  }

  return (
    <ScrollView style={styles.container}>
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
      <Button
        icon="email-send"
        mode="contained"
        style={styles.button}
        onPress={handleButtonClick}
      >
        Submit
      </Button>
    </ScrollView>
  );
}

// const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  button: {
    marginRight: '10%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 60,
    width: '50%',
    padding: 17,
    borderRadius: 15,
    marginTop: '20%',
  },
  input: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
