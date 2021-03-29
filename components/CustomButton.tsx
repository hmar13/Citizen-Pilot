import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import CustomButtonInterface from '../interfaces/CustomButtonInterface';
import {
  Foundation,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default function CustomButton({ navigation }) {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF6B6B' }]}
          onPress={() => navigation.navigate('ReportProblem')}
        >
          <Foundation name="alert" size={40} color="#3A4276" />
          <Text style={styles.buttonText}>Report a problem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFEA00' }]}
          onPress={() => navigation.navigate('ProposeSolution')}
        >
          <FontAwesome5 name="lightbulb" size={40} color="#3A4276" />
          <Text style={styles.buttonText}>Propose a solution</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F7FFF7' }]}
          onPress={() => navigation.navigate('Projects')}
        >
          <FontAwesome5 name="info-circle" size={40} color="#3A4276" />
          <Text style={styles.buttonText}>What are we working on</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FFD166' }]}
          onPress={() => navigation.navigate('CurrentProposals')}
        >
          <MaterialCommunityIcons name="vote" size={40} color="#3A4276" />
          <Text style={styles.buttonText}>Vote on future projects</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '-15%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: '65%',
    width: '32%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    margin: '5%',
  },
});
