import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Alert,
  Text,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

interface imageUri {
  imageUri: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImageUri: any;
  headerText: string;
}

export default function Camera({
  imageUri,
  setImageUri,
  headerText,
}: imageUri): JSX.Element {
  const [isPictureTaken, setIsPictureTaken] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera permissions');
        }
      }
    })();
  }, []);

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      base64: false,
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
      setIsPictureTaken(true);
    }
  };

  const deletePicture = async () => {
    setImageUri('');
    setIsPictureTaken(false);
  };

  return (
    <View
      style={[
        styles.container,
        isPictureTaken ? styles.PictureView : styles.noPicture,
      ]}
    >
      <Text style={styles.text}>{headerText}</Text>
      {imageUri.length === 0 && (
        <Button
          icon="camera"
          mode="contained"
          onPress={takePicture}
          style={styles.button}
        >
          Take a picture
        </Button>
      )}
      {imageUri.length > 0 && (
        <Card style={styles.image}>
          <Card.Cover source={{ uri: imageUri }} />
          <Card.Actions>
            <Button onPress={deletePicture}>Retake</Button>
          </Card.Actions>
        </Card>
      )}
    </View>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    justifyContent: 'center',
    height: 60,
    width: '50%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  image: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  container: {
    backgroundColor: 'white',
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 7,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
  noPicture: {
    height: height / 6,
  },
  PictureView: {
    height: height / 2.4,
  },
});
