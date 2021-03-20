import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportProblem(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
