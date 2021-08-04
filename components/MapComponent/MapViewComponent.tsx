import React, { SetStateAction } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

interface Coordination {
  latitude: number;
  setLatitude: React.Dispatch<SetStateAction<number>>;
  longitude: number;
  setLongitude: React.Dispatch<SetStateAction<number>>;
}

export default function MapPinDrop({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}: Coordination): JSX.Element {
  const handleDragEnd = (e: any) => {
    const newlatitude = e.nativeEvent.coordinate.latitude;
    const newLongitude = e.nativeEvent.coordinate.longitude;
    setLatitude(newlatitude);
    setLongitude(newLongitude);
  };

  return (
    <View style={styles.container}>
      <MapView
        toolbarEnabled
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          draggable
          onDragEnd={e => handleDragEnd(e)}
        />
      </MapView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width - 60,
    height: 300,
  },
});
