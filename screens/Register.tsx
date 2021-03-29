import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import ButtonComponent from '../components/WelcomeComponents/Button';
import BannerComponent from '../components/BannerComponent';
import LogoComponent from '../components/LogoComponent';
import QRCodeModal from './QRCodeModal';
import TextInputComponent from '../components/LoginSignupComponents/TextInputcomponent';
import ScanPrompt from '../components/LoginSignupComponents/ScanPromptComponent';
import { postNewUser } from '../services/Apiclient';


export default function Register({ navigation }): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePressScan = () => {
    setIsDialogVisible(false);
    setIsModalVisible(true);
  };

  const handlePressCancel = () => {
    setIsDialogVisible(false);
    navigation.navigate('Welcome');
  };

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleButtonPress = async () => {
    if (!firstName) {
      Alert.alert('First name is required. Please scan your QR code');
      return navigation.navigate('Login');
    } else if (!email) {
      Alert.alert('Email field is required.');
      return navigation.navigate('Login');
    } else if (!password) {
      Alert.alert('Password field is required.');
      return navigation.navigate('Login');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
      return navigation.navigate('Login');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
      return navigation.navigate('Login');
    }

    await postNewUser(firstName, lastName, email, password);
    emptyState()
    return navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <BannerComponent />
      <View style={styles.secondColumn}>
        <ScanPrompt
          isDialogVisible={isDialogVisible}
          setIsDialogVisible={setIsDialogVisible}
          handlePressCancel={handlePressCancel}
          handlePressScan={handlePressScan}
        />
        <QRCodeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <LogoComponent />
        <Text style={styles.text}>Create an account</Text>
        <View style={styles.loginContainer}>
          <TextInputComponent
            text="First Name"
            label="First Name"
            value={firstName}
            setItem={setFirstName}
            isDisabled
            secureText={false}
          />
          <TextInputComponent
            text="Last Name"
            label="Last Name"
            value={lastName}
            setItem={setLastName}
            isDisabled
            secureText={false}
          />
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
          <TextInputComponent
            text="Confirm your password"
            label="Password"
            value={confirmPassword}
            setItem={setConfirmPassword}
            isDisabled={false}
            secureText={true}
          />
        </View>
        <ButtonComponent
          buttonText="Register"
          handleButtonPress={handleButtonPress}
        />
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
    marginLeft: '9%',
    marginTop: '-100%',
    marginBottom: '7%',
  },
  loginContainer: {
    marginBottom: '20%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: '13%',
    fontWeight: 'bold',
    color: '#FFDE59',
  },
  createAccount: {
    color: 'grey',
    marginTop: '5%',
    textAlign: 'center',
  },
});
