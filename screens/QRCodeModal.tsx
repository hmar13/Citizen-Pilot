/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface Modal {
  isModalVisible: boolean;
  setIsModalVisible: any;
}


export default function QRCodeModal({ isModalVisible, setIsModalVisible }: Modal): JSX.Element {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        presentationStyle="overFullScreen"
      >
        <View style={styles.image}>
          <Text>Hello</Text>
        </View>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setIsModalVisible(false);
          }}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableHighlight>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
