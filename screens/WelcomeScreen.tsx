/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import ButtonComponent from '../components/WelcomeComponents/Button';

export default function WelcomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.banner}
          source={require('../assets/images/banner-long.png')}
        />
      </View>
      <View style={styles.secondColumn}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <Text style={styles.text}>Log in and make your {'\n'} voice heard</Text>
        <ButtonComponent buttonText="Sign in" />
      </View>
    </View>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  banner: {
    height,
    width: width / 3.6,
  },
  secondColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 36,
  },
  logoContainer: {
    marginTop: 120,
    marginBottom: -50,
  },
  logo: {
    resizeMode: 'contain',
    height: 210,
    width: 210,
  },
  text: {
    color: '#A9A9A9',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
