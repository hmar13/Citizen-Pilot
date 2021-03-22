import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomButtonInterface from '../interfaces/CustomButtonInterface';

const CustomButton: FunctionComponent<CustomButtonInterface> = ({
  backgroundColor,
  color,
  text,
}) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor }}>
      <Text style={{ ...styles.buttonText, color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 125,
    width: 125,
    margin: 22,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Geeza Pro',
  },
});

CustomButton.defaultProps = {
  backgroundColor: 'red',
  color: 'black',
};

export default CustomButton;
