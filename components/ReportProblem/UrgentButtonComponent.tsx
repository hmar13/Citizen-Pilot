import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function UrgentButton(): JSX.Element {
  const [checked, setChecked] = useState('');

  return (
    <View style={styles.container}>
      <RadioButton
        value="urgent"
        uncheckedColor="red"
        color="red"
        status={checked === 'urgent' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('urgent')}
      />
      <Text> This is urgent </Text>
      <RadioButton
        value="notUrgent"
        uncheckedColor="green"
        color="green"
        status={checked === 'notUrgent' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('notUrgent')}
      />
      <Text>Not urgent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: '3%',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
});
