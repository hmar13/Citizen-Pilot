import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';

interface ModalInterface {
  isModalVisible: boolean;
  setModalVisible: any;
}

export default function MessageReceivedModal({ isModalVisible, setModalVisible }: ModalInterface): JSX.Element {
  return (
    <Modal style={styles.container} isVisible={isModalVisible} onBackdropPress={() => {
      setModalVisible(false);
    }} >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Thanks</Text>
        <Image source={require('../assets/9613-tick.gif')} style={styles.gif} />

      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}> We have received your message</Text>
        <Text>You will hear back from us as soon as possible</Text>
      </View>
    </Modal >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    marginBottom: 130,
    marginTop: 130,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: '30%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  messageContainer: {
    alignItems: 'center',
  },
  message: {
    marginBottom: 10,
  },
  gif: {
    height: 180,
    width: 180

  }
})
