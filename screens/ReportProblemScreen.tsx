import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportProblem(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Report a problem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
