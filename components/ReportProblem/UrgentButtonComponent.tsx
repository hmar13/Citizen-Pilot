import React, { useState, SetStateAction } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface urgencyStatus {
  setUrgency: React.Dispatch<SetStateAction<boolean>>;
}

export default function UrgentButton({
  setUrgency,
}: urgencyStatus): JSX.Element {
  const [checked, setChecked] = useState('');

  const handlePress = (isUrgent: boolean, name: string) => {
    setChecked(name);
    setUrgency(isUrgent);
  };

  return (
    <View style={styles.container}>
      <RadioButton
        value="urgent"
        uncheckedColor="red"
        color="red"
        status={checked === 'urgent' ? 'checked' : 'unchecked'}
        onPress={() => handlePress(true, 'urgent')}
      />
      <Text> This is urgent </Text>
      <RadioButton
        value="notUrgent"
        uncheckedColor="green"
        color="green"
        status={checked === 'notUrgent' ? 'checked' : 'unchecked'}
        onPress={() => handlePress(false, 'notUrgent')}
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
    alignItems: 'center',
  },
});
