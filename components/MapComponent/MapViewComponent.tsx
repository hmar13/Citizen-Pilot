import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function MapPinDrop(): JSX.Element {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        toolbarEnabled
        style={styles.map}
        // showsUserLocation
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} draggable></Marker>
      </MapView>
    </View>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width - 40,
    height: 300,
  },
});
