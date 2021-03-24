/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

export default function BannerComponent(): JSX.Element {
  return (
    <View>
      <Image
        style={styles.banner}
        source={require('../assets/images/banner-long.png')}
      />
    </View>
  );
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  banner: {
    height,
    width: width / 3.6,
  },
});
