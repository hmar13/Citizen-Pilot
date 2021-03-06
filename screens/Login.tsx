import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from "react-redux";
import { fetchUser } from '../store/actions/user';
import ButtonComponent from '../components/WelcomeComponents/Button';
import BannerComponent from '../components/BannerComponent';
import LogoComponent from '../components/LogoComponent';
import TextInputComponent from '../components/LoginSignupComponents/TextInputcomponent';

export default function Login({ navigation }): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = async () => {
    if (!email) {
      setPassword('');
      setEmail('');
      return Alert.alert('Email field is required.');
    }
    if (!password) {
      setPassword('');
      setEmail('');
      return Alert.alert('Password field is required.');
    }

    const action = await fetchUser(email, password);
    await dispatch(action);
    setPassword('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <BannerComponent />
      <View style={styles.secondColumn}>
        <LogoComponent />
        <Text style={styles.text}>Sign in to your account</Text>
        <View style={styles.loginContainer}>
          <TextInputComponent
            text="Enter your email address"
            label="Email"
            value={email}
            setItem={setEmail}
            isDisabled={false}
            secureText={false}
          />
          <TextInputComponent
            text="Add your password"
            label="Password"
            value={password}
            setItem={setPassword}
            isDisabled={false}
            secureText={true}
          />
        </View>
        <ButtonComponent
          buttonText="Sign in"
          handleButtonPress={handleButtonPress}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccount}>Create an account</Text>
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
    marginLeft: '9%',
  },
  loginContainer: {
    marginBottom: '55%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: '15%',
    fontWeight: 'bold',
    color: '#FFDE59',
  },
  createAccount: {
    color: 'grey',
    marginTop: '9%',
  },
});
