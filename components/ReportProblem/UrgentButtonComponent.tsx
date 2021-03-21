import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function UrgentButton(): JSX.Element {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <RadioButton
        value="first"
        uncheckedColor="red"
        color="red"
        status={checked === true ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />
      <Text>This is urgent</Text>
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
