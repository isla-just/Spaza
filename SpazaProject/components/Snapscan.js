import React,{useState} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView, ScrollView } from 'react-native';
import logo from '../assets/logo.png';
import card from '../assets/card.png';

import Snapscan from 'snapscan'

export default function Snapscan({navigation}) {

    const snapscan = new SnapScan({
        apiKey: 'b291ed38-3905-4504-8797-34daada97b6c',
        merchant: 'byislajust'
      })

      // Example method you can use to get your SnapCode/QR Code link and image
snapscan.getQRCode()
.then((snapCode) => {
  console.log(snapCode)
  // logs object containing `urlLink` and `imageLink`
})
.catch((error) => {
  console.error(error)
  // logs error thrown if anything failed
})

  return (


    <SafeAreaView style={styles.container}>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
 
     
});