import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface buttonT {
  buttonText: string;
}
export default function ButtonComponent({ buttonText }: buttonT): JSX.Element {
  return (
    <Button
      icon="arrow-right-circle-outline"
      mode="contained"
      contentStyle={{ flexDirection: 'row-reverse', width: 150 }}
      color="#ffde59"
      style={styles.button}
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
