import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportProblem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text>Dropdown list</Text>
        <Text>Take a picture</Text>
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
