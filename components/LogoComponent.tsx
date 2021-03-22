/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function LogoComponent(): JSX.Element {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 120,
    marginBottom: -50,
  },
  logo: {
    resizeMode: 'contain',
    height: 210,
    width: 210,
  },
});
