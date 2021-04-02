import React, { useState, SetStateAction, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface QRComponent {
  setFirstName: React.Dispatch<SetStateAction<string>>;
  setLastName: React.Dispatch<SetStateAction<string>>;
  setIsModalVisible: React.Dispatch<SetStateAction<boolean>>;
}

export default function QRCodeComponent({
  setFirstName,
  setLastName,
  setIsModalVisible,
}: QRComponent): JSX.Element {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  interface Data {
    data: string;
  }
  const handleBarCodeScanned = ({ data }: Data) => {
    setScanned(true);
    const dataArray: string[] = data.split(' ');
    const firstName = dataArray[0];
    const lastName = dataArray[1];
    setFirstName(firstName);
    setLastName(lastName);
    setIsModalVisible(false);
  };

  if (hasPermission === null) {
    return (
      <ActivityIndicator
        animating
        color={Colors.yellow400}
        style={styles.activity}
      />
    );
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  activity: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
