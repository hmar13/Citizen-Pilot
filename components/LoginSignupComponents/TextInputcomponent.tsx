import React, { SetStateAction } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

interface Input {
  text: string;
  label: string;
  value: string;
  setItem: React.Dispatch<SetStateAction<string>>;
  isDisabled: boolean;
  secureText: boolean
}

export default function TextInputComponent({
  text,
  label,
  value,
  setItem,
  isDisabled,
  secureText,
}: Input): JSX.Element {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        value={value}
        disabled={isDisabled}
        placeholder={label}
        mode="outlined"
        style={styles.textInput}
        secureTextEntry={secureText}
        onChangeText={input => setItem(input)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'red',
    width: 200,
    height: 30,
    marginBottom: 25,
    fontSize: 13,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
