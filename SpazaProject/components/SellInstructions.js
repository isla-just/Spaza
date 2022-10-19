import React,{useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';
import ill4 from '../assets/ill4.png';


 
const height_proportion = '100%';
const btn_prop = '80%';
const txt_prop = '90%';


 
export default function SellInstructions({navigation}) {

    return (
        
        <SafeAreaView style={styles.container}>

<Image source={logo} style={styles.logo} />

            <Image source={ill4} />
            <Text style={styles.title}>let’s sell some goods</Text>
            <Text style={styles.text}>clean your camera and place all the goods on a flat surface and when youre ready snap the picture - sit tight and we will do everything else for you</Text>


            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt} onPress={()=> navigation.navigate("CameraScreen")} >I'm ready!</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>

            <View style={styles.navigation}>
        <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}><Text  style={styles.navItem}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Stocktake")}><Text  style={styles.navItem}>Stocktake</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("SellInstructions")}><Text  style={styles.navItemActive}>Sell</Text></TouchableOpacity>

        <View style={styles.underline}></View>
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
    },navigation:{
        backgroundColor:'#1E2F4D',
        width:'100%',
        position:'absolute',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
        height:90,
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'left',
        padding:20,
    },navItemActive:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:18
    },navItem:{
        color:'#FFFFFF',
        fontSize:18
    },underline:{
        position:'absolute',
        width:34,
        height:2,
        backgroundColor:'#FEB930',
        marginTop:43,
        marginLeft:265
    }
});