import React,{useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';
import ill4 from '../assets/ill4.png';
 
const height_proportion = '100%';
const btn_prop = '80%';
const txt_prop = '90%';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications


 
export default function Onboarding1({navigation, route}) {
  
  const userData = route.params;

    return (
        
        <SafeAreaView style={styles.container}>

<Image source={logo} style={styles.logo} />

            <Image source={ill4} />
            <Text style={styles.title}>let’s get started with snapscan</Text>
            <Text style={styles.text}>register as a merchant so you can use snapscan for the payments. Keep an eye out for your QR code and screenshot it</Text>


            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt} onPress={()=> navigation.navigate("Onboarding2", userData)} >I've registered!</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>

            </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width:'100%',
        padding:40, 
        alignItems: 'center',
      },
    slide: {
        backgroundColor: '#FFFFFF',
        width:'100%',
        alignItems: 'center',
      },
    logo: { 
        height: 35,
        width: 146,
        marginTop: 40,
        marginBottom: 40
      },

    image: { 
      width: height_proportion,
      marginTop: 60,
    },
      title:{
          color:'#1E2F4D',
          fontSize:25,
          marginTop:20,
          textAlign:'center',
          width: txt_prop,
      },
      text:{
          color:'#1E2F4D',
          fontSize:18,
          marginTop:10,
          textAlign:'center',
          width: txt_prop,
      },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn:{
        width: btn_prop,
        padding: 20,
        backgroundColor: 'transparent',
        borderColor:'#1E2F4D',
        borderWidth:1.5,
        borderRadius:20,
        marginTop:20
      }, btntxt:{
        textAlign:'center',
        fontSize:15
      },btnbg:{
        width: btn_prop,
        height:62, 
        backgroundColor: '#FEB930',
        borderRadius:20,
        zIndex:-1,
        marginTop:-55,
        marginLeft:13

      }
});