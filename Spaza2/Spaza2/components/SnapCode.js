import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';
import ill4 from '../assets/ill4.png';
import { auth } from '../Firebase';
import { getUserQR } from '../services/Database';
import {getStorage, ref, uploadBytes} from 'firebase/storage'

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

const height_proportion = '100%';
const btn_prop = '80%';
const txt_prop = '90%';


 
export default function SnapCode({navigation}) {

  const [QR, setQR] = useState('');

  const GetQR = async ()=>{
var userId = auth.currentUser.uid
    const userData = await getUserQR(userId);
    setQR(userData.merchant_id);
}


useEffect(() => {

  console.log(QR)
     GetQR()
},[QR]);

    return (
        
        <SafeAreaView style={styles.container}>

<Image source={logo} style={styles.logo} />

       
            <Text style={styles.title}>get the shopper to scan this QR code</Text>
            <Text style={styles.text}>and snapscan will do the rest</Text>

            <Image
            source={{uri: QR}}
            style={styles.url}
            />

            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt} onPress={()=> navigation.navigate("Success")} >Done</Text> 
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
          marginBottom: 50
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
        marginTop:50
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
    }, url:{
      width:300,
      height:300,
      backgroundColor:'#FFF'
    }
});