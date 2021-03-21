import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/WelcomeComponents/Button';
import BannerComponent from '../components/BannerComponent';
import LogoComponent from '../components/LogoComponent';
import TextInputComponent from '../components/LoginSignupComponents/TextInputcomponent';

export default function Register({ navigation }): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const emptyState = () => {
  //   setFirstName('');
  //   setLastName('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  // };

  return (
    <View style={styles.container}>
      <BannerComponent />
      <View style={styles.secondColumn}>
        <LogoComponent />
        <Text style={styles.text}>Create an account</Text>
        <View style={styles.loginContainer}>
          <TextInputComponent
            text="First Name"
            label="First Name"
            value={firstName}
            setItem={setFirstName}
          />
          <TextInputComponent
            text="Last Name"
            label="Last Name"
            value={lastName}
            setItem={setLastName}
          />
          <TextInputComponent
            text="Enter your email address"
            label="Email"
            value={email}
            setItem={setEmail}
          />
          <TextInputComponent
            text="Add your password"
            label="Password"
            value={password}
            setItem={setPassword}
          />
          <TextInputComponent
            text="Confirm your password"
            label="Password"
            value={confirmPassword}
            setItem={setConfirmPassword}
          />
        </View>
        <ButtonComponent buttonText="Register" />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createAccount}>
            Already have an account? {'\n'} Sign in
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    marginLeft: 36,
    marginTop: -130,
  },
  loginContainer: {
    marginBottom: 20,
  },
  textInput: {
    width: 200,
    height: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFDE59',
  },
  createAccount: {
    color: 'grey',
    marginTop: 16,
    textAlign: 'center',
  },
});
