import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

export default function HorizontalBanner(): JSX.Element {
  return (
    <Image
      source={require('../assets/images/banner-horizontal.png')}
      style={styles.image}
    />
  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width,
    height: '10%',
  }
});