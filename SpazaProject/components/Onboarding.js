
import React,{useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {color} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import logo from '../assets/logo.png';
import ill1 from '../assets/ill1.png';
import Intro from './Intro'

import AppIntroSlider from 'react-native-app-intro-slider';

const width_proportion = '120%';

export default function Onboarding({navigation}) {

    return (

        <Intro/>
//         <View style={styles.container}>

     

//         {/* <Image source={logo} style={styles.logo} />
//         <Image source={ill1} style={styles.ill1} />
    
//              <Text style={styles.header}>selling has never been simpler...</Text>
//              <Text style={styles.header2}>streamlining your spaza shop</Text>

// <TouchableOpacity onPress={()=> navigation.replace("Login")}>
// </TouchableOpacity> */}

//          </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#FFFFFF',
    //     width:'100%',
    //     padding:40, 
    //     alignItems: 'center',
    //   },
      logo: { 
        height: 35,
        width: 146,
        marginTop: 40,
      },

    ill1: { 
      width: width_proportion,
      marginTop: 40,
    },
      header:{
          color:'#1E2F4D',
          fontSize:30,
          marginTop:20,
          textAlign:'center'
      },
      header2:{
          color:'#1E2F4D',
          fontSize:20,
          marginTop:10,
          textAlign:'center'
      
      },swipe:{
        color:'#fff',
        fontFamily:'medium',
        fontSize:20,
        marginTop:-340,
        width:'100%',
        textAlign:'center'
      }
    
});