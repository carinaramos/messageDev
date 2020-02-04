import React from 'react';
import styles from './Styles/styles'
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.background}>
        <View style={styles.tabs}>
          <Text style={styles.lightTab}>SIGN IN</Text>
          <Text style={styles.darkTab}>SIGN UP</Text>
        </View>
        <View style={styles.lines}>
          <View style={styles.lightLine}></View>
          <View style={styles.darkLine}></View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.textBox}>
          <Text style={styles.title}>
            Getting Started
          </Text>
          <Text style={styles.subtitle}>
            Sign up or login to chat with friends and other students.
          </Text>
          <Text style={styles.inputLabel}>
            Email Address
          </Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.inputLabel}>
            Password
          </Text>
          <TextInput style={styles.input}></TextInput>
          <Button title="Log In" titleStyle={styles.subtitle} buttonStyle={styles.button} >
            
          </Button>
          <Text style={styles.helpText}>
            Forgot Password?
          </Text>
        </View>
      </View>
    </View>
  );
}

