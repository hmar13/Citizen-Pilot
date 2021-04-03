/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import QRCodeComponent from '../components/LoginSignupComponents/QRCodeReaderComponent';

interface ModalVisiblity {
  isModalVisible: boolean;
  setIsModalVisible: any;
  setFirstName: any;
  setLastName: any;
}

export default function QRCodeModal({
  isModalVisible,
  setIsModalVisible,
  setFirstName,
  setLastName,
}: ModalVisiblity): JSX.Element {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.main}>
          <QRCodeComponent
            setFirstName={setFirstName}
            setLastName={setLastName}
            setIsModalVisible={setIsModalVisible}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
