import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Header() {
    const [text, setText] = useState(null)

  return (
    <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/Logo.png')}/>
        <Text style={styles.search}>
            Filter Search: 
        </Text> 
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}>
        </TextInput>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: '12%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#684d67e6',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    search: {
        color: 'white',
        marginLeft: 85,
        marginTop: 60,
    },
    input: {
        backgroundColor: 'white',
        width: 90,
        height: 18,
        marginLeft: 5,
        borderRadius: 6,
        marginTop: 60,
        padding: 7,
    },
    logo: { 
        height: 45,
        width: 65,
        marginTop: 60,
        marginLeft: 0,
      }
});