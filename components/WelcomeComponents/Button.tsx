/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface buttonT {
  buttonText: string;
  handleButtonPress: any;
}
export default function ButtonComponent({
  buttonText,
  handleButtonPress,
}: buttonT): JSX.Element {
  return (
    <Button
      icon="arrow-right-circle-outline"
      mode="contained"
      contentStyle={{ flexDirection: 'row-reverse', width: 150 }}
      color="#ffde59"
      style={styles.button}
      onPress={handleButtonPress}
    >
      {buttonText}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 15,
  },
});
