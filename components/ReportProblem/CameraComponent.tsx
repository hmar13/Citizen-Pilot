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
  needImage: boolean;
}

export default function Camera({
  imageUri,
  setImageUri,
  headerText,
  needImage,
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

  const pickImage = async () => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
    // TODO: NOT SURE IF THIS SHOULD GO THERE!!!
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
      setIsPictureTaken(true);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isPictureTaken ? styles.PictureView : styles.noPicture,
      ]}
    >
      <Text style={styles.text}>{headerText}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {imageUri.length === 0 && (
          !needImage ?
            <Button
              icon="camera"
              mode="contained"
              onPress={takePicture}
              style={styles.button}
            >
              Take a picture
          </Button> :
            <Button
              icon="account-box-multiple"
              mode="contained"
              onPress={pickImage}
              style={styles.button}
            >
              Upload an image
        </Button>
        )}
      </View>
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
    flex: 1,
    backgroundColor: 'white',
    width: width - 30,
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
    height: 120,
  },
  PictureView: {
    height: 315,
  },
});
