/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonComponent from '../components/WelcomeComponents/Button';
import BannerComponent from '../components/BannerComponent';
import LogoComponent from '../components/LogoComponent';

export default function WelcomeScreen({ navigation }): JSX.Element {
  // this probably won't be necessary if this becomes a loading screen to check if user is logged in or not.
  const handleButtonPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <BannerComponent />
      <View style={styles.secondColumn}>
        <LogoComponent />
        <Text style={styles.text}>Log in and make your {'\n'} voice heard</Text>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            buttonText="Sign in"
            handleButtonPress={handleButtonPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  secondColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 36,
  },
  text: {
    color: '#A9A9A9',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: '120%',
  },
});
