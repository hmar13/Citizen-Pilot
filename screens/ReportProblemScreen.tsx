import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import CameraComponent from '../components/ReportProblem/CameraComponent';
import ListAccordion from '../components/ReportProblem/ListAccordion';


export default function ReportProblem(): JSX.Element {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <ListAccordion />
      <View>
        <CameraComponent />
        <TextInput
          label="Description"
          multiline
          value={text}
          mode="outlined"
          onChangeText={input => setText(input)}
        />
      </View>
    </View>
  );
}

// const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
