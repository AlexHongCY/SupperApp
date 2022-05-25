import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

import Header from './Src/Header'
import Boxes from './Src/Boxes'

export default function App (){
  return (
    <View style={styles.container}>
      <Header />
      <Boxes />
    </View>
  );
 }


function test(){
  console.log("this is log message");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000c0",
    padding: 10
  },
  image: {
    justifyContent: "center",
    height: 850,
    width: 390
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  logo: { 
    height: 80,
    width: 80,
  }
});


{/* <View style={styles.container}>
<ImageBackground style={styles.image} resizeMode="cover" source={require('./assets/Brine.jpeg')}>
<Image
  style={styles.logo}
  source={require('./assets/Logo.png')}
/>
<Text style={styles.text}>Hello world</Text>
<TouchableOpacity style={styles.button} onPress={test}>
  <Text style={styles.text}>Tap Me</Text>
</TouchableOpacity>
</ImageBackground>
<StatusBar style="auto" />
</View> */}