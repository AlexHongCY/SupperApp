import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';

export default function Boxes() {
  return (
    <View style={[styles.container,{flexDirection: 'row'},]}>
        {/* <ImageBackground style={styles.BGimage} source={require('../assets/Brine.jpeg')}> */}
        <ScrollView style={styles.box}>
            <View style={styles.inner}>
            <Image style={styles.image} source={require('../assets/Meesiam.webp')}/>
                <Text style={styles.word}>Mee Siam Palace offering 30% off AND free delivery on weekdays from 12pm - 2pm.</Text>
            </View>
        </ScrollView>
        <ScrollView style={styles.box}>
            <View style={styles.inner}>
            <Image style={styles.image} source={require('../assets/Burger.webp')}/>
                <Text style={styles.word}>Burger Queens 1 for 1 promotion from now till 15th July!</Text>
            </View>
        </ScrollView>
        <ScrollView style={styles.box}>
            <View style={styles.inner}>
            <Image style={styles.image} source={require('../assets/French.jpeg')}/>
                <Text style={styles.word}>Soup fork pushes new seasonal items along with 15% discount!</Text>
            </View>
        </ScrollView>
        <ScrollView style={styles.box}>
            <View style={styles.inner}>
            <Image style={styles.image} source={require('../assets/Pasta.webp')}/>
                <Text style={styles.word}>Pasta maniacs delivery now available islandwide with noon time promotions up to 50% off from 11am - 3pm!</Text>
            </View>
        </ScrollView>
        {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  BGimage: {
    justifyContent: "center",
    height: 760,
    width: 390,
  },
  textbox: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    backgroundColor: "#4e337373",
    padding: 5,
  },
  image: {
      width: 130,
      height: 130,
      margin: 10,
  },
  box: {
      width: '45%',
      height: '45%',
      padding: 5,
      flexDirection: 'column',
      flex: 1,
  },
  inner: {
      flex: 1,
      backgroundColor: "#4e337373",
      alignItems: 'center',
      justifyContent: 'center',
  },
  word: {
      color: 'white',
  }
});

// <Image style={styles.image} source={require('../assets/French.jpeg')}/>
// <Image style={styles.image} source={require('../assets/Burger.webp')}/>
// <Image style={styles.image} source={require('../assets/Lemak.jpeg')}/>
// <Image style={styles.image} source={require('../assets/Noodles.jpeg')}/>
// <Image style={styles.image} source={require('../assets/Meesiam.webp')}/>
// <Image style={styles.image} source={require('../assets/Pasta.webp')}/>
// <Image style={styles.image} source={require('../assets/Prata.webp')}/>
// <Image style={styles.image} source={require('../assets/Ribs.png')}/>

