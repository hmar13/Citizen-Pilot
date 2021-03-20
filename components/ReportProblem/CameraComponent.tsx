import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Platform, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function Camera(): JSX.Element {
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera  permissions to make this work!');
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
    }
  };

  const deletePicture = async () => {
    setImageUri('');
  };

  return (
    <ScrollView>
      <View>
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
    </ScrollView>
  );
}

// const { height } = Dimensions.get('window');
// const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '5%',
  },
  button: {
    marginLeft: '5%',
    justifyContent: 'center',
    height: 60,
    width: '50%',
    padding: 17,
    borderRadius: 15,
    marginTop: '20%',
  },
  image: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
});
