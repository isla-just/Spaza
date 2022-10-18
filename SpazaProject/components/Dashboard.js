import React,{useState} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';
import card from '../assets/card.png';

import pattern from '../assets/pattern.png';


// import * as Font from 'expo-font';

// Font.loadAsync({
//     // 'light':require('../assets/fonts/MontserratAlternates-Light.ttf'),
//     // 'regular':require('../assets/fonts/MontserratAlternates-Regular.ttf'),
//     'medium':require('../assets/fonts/MontserratAlternates-Medium.ttf'),
//     'semiBold':require('../assets/fonts/MontserratAlternates-SemiBold.ttf'),
//   });

const height_proportion = '100%';

export default function Dashboard({navigation}) {

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.container}>
      
            <Text style={styles.text}>hi there</Text>
            <Text style={styles.header}>Zandile!</Text>

            <View style={styles.pfp}/>
 
            <Image source={card} style={styles.card} />

            <View style={styles.yellowBlock}>
            <Text style={styles.header2}>200</Text>
            <Text style={styles.text2}>items in stock</Text>
      
            </View>

            <View style={styles.blueBlock}>
            <Text style={styles.header3}>30</Text>
            <Text style={styles.text3}>sales in the month of November</Text>
            </View>
            <Image source={pattern} style={styles.pattern} />
           
            <Text style={styles.headerSection}>Sales history</Text>
            <Text style={styles.text}>last sale</Text>


        </View>

          


        <View style={styles.half}>

        </View>

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
      half1:{
        width: '50%',
        alignSelf:'flex-start',
        padding:40, 
      }, 
      half2:{
        width: '50%',
        alignSelf:'flex-end',
        padding:40, 
      }, 
      header:{
        color:'#1E2F4D',
        fontSize:25,
        marginTop:0,
        width:'100%',
        fontWeight:'bold',
      },
    
    text:{
        color:'#1E2F4D',
        fontSize:18,
        marginTop:5,
        alignSelf:'flex-start'
    },
    pfp:{
        backgroundColor:'#FEB930',
        width:55,
        height:55,
borderRadius:55,
        marginTop:-50,
        alignSelf:'flex-end'
    }, yellowBlock:{
        backgroundColor:'#FEB930',
        width:110,
        borderRadius:18,
        padding:20,
        marginTop:-90,
        alignSelf:'flex-start',
        marginLeft:0,


        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 20,
    }, 
    header2:{
      color:'#1E2F4D',
      fontSize:30,
      marginTop:0,
      width:'100%',
      textAlign:'center',
      fontWeight:'bold'
    },
  
  text2:{
      color:'#1E2F4D',
      fontSize:18,
      marginTop:5,
      textAlign:'center'
  },blueBlock:{
    backgroundColor:'#C6D7EA',
    width:230,
    borderRadius:18,
    padding:20,
    marginLeft:200,
    marginTop:-125,
    flexDirection:'row',

    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 15,

  },    header3:{
    color:'#1E2F4D',
    fontSize:30,
    marginTop:0,
    width:'100%',
    textAlign:'left',
    fontWeight:'bold',
  },

text3:{
    color:'#1E2F4D',
    fontSize:13,
    marginTop:5,
    textAlign:'left',
    width:120,
    marginLeft:-140,
}, pattern:{
    marginTop:-130,
    marginLeft:200,
    zIndex:-1
},headerSection:{
    color:'#1E2F4D',
    fontSize:25,
    marginTop:0,
    width:'100%',
    textAlign:'left',
    marginTop:60,
    fontWeight:'bold'
}
     
});