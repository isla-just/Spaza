import React,{useState} from 'react';
import { StyleSheet, Platform, Text, View, Image, TouchableOpacity, TextInput, Alert,KeyboardAvoidingView, Keyboard, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';
import scribble from '../assets/scribble.png';
import scribble2 from '../assets/scribble2.png';
import squiggle from '../assets/squiggle.png';

// linking your firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

// import * as Font from 'expo-font';

// Font.loadAsync({
//     // 'light':require('../assets/fonts/MontserratAlternates-Light.ttf'),
//     // 'regular':require('../assets/fonts/MontserratAlternates-Regular.ttf'),
//     'medium':require('../assets/fonts/MontserratAlternates-Medium.ttf'),
//     'semiBold':require('../assets/fonts/MontserratAlternates-SemiBold.ttf'),
//   });

const height_proportion = '100%';

export default function Login({navigation}) {

    const [email, onEmailChange]=useState("");
    const [password, onPasswordChange]=useState("");

    // when pressing the login button
    const handleLoginPress = () =>{

        Keyboard.dismiss();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            //when successful
            const user = userCredentials.user;
            Alert.alert(user.uid);

            navigation.navigate("Onboarding1");
        })
        .catch((error)=>{
            //when failed
            Alert.alert(error.message);
        })
    }
  return (
    <SafeAreaView style={styles.container}>
 
            <Image source={scribble} style={styles.scribble} />

            <View style={styles.card}>

            <Image source={logo} style={styles.logo} />
            <Text style={styles.header}>login</Text>

            <Image source={squiggle} style={styles.squiggle} />
            <Text style={styles.text}>welcome back to spaza!</Text>


            <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding":"height"}
        style={styles.writeTaskWrapper}>
                        <TextInput
             style={styles.input}
             value={email}
             onChangeText={onEmailChange}
             placeholder='Email'
             placeholderTextColor='#616D82'
            />
             <TextInput
             style={styles.input}
             value={password}
             onChangeText={onPasswordChange}
             placeholder='Password'
             placeholderTextColor='#616D82'
             secureTextEntry={true}
            />

<Text style={styles.oops}>oops I forgot</Text>

<TouchableOpacity style={styles.btn} onPress={handleLoginPress}>
            <Text style={styles.btntxt}>Login</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>


            <Text style={styles.signupTxt}>Don’t have an account yet? </Text>


        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
             <Text style={styles.signupTxt2}>Sign up now</Text>
             <Image source={scribble2} style={styles.scribble2} />
        </TouchableOpacity>

        </KeyboardAvoidingView>
    
            </View>
         

 
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: '#FEB930',
        width:'100%',
        padding:40, 
        alignItems: 'center',

      },
      logo: { 
        height: 30,
        width: 126,
        marginTop: 10,
        marginBottom: 40
      },

    scribble: { 
      width: '100%',
      padding:0,
      margin:0,
      position: 'absolute',
    },
    card:{
    backgroundColor:"#fff",
    width: '100%',
    height:'100%',
   
    borderTopStartRadius:60,
    borderTopEndRadius:60,
    borderBottomEndRadius:0,
    borderBottomRightRadius:0,

    marginTop:80,  padding:40, 
    alignItems: 'center',
    },
    header:{
        color:'#1E2F4D',
        fontSize:25,
        marginTop:0,
        width:'100%'
    },squiggle:{
        width: '30%',
        alignSelf:'flex-start'
    },  scribble2:{
        width: '40%',
        alignSelf:'center',
        marginTop:-20,
        zIndex:-1
    },
    
    text:{
        color:'#1E2F4D',
        fontSize:18,
        marginTop:5,
    
        alignSelf:'flex-start'
    },writeTaskWrapper:{
        width:'100%'
    },

oops:{
    color:'#1E2F4D',
    fontSize:15,
    marginTop:10,
    alignSelf:'flex-end',
    textDecorationLine: 'underline',
},
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#1E2F4D',
        marginTop:30,
        width:'100%',
        padding:10,
        backgroundColor:'#FFF',
        fontSize:15,
    },loginButton:{
        width:'100%',
        padding:20,
        backgroundColor:'#FB5E1B',
        borderRadius:50,   
        marginTop:40     
    },loginTxt:{
        color:'#fff',
    
        textAlign:'center',
        fontSize:18
    },signup:{
        width:150,
        height:150,
        backgroundColor: '#F583B4',
        borderRadius:150,
        marginLeft:150,
        marginTop:120,
        padding:15
    },signupTxt:{
        color:'#1E2F4D',
        fontSize:18,
      
        textAlign:'center',
        marginTop:30,
    },   
        signupTxt2:{
        color:'#1E2F4D',
        fontSize:18,
        textAlign:'center',
        marginTop:5,
        fontWeight:'bold'

    }, 
    
    
    
    btn:{
        width: '100%',
        padding: 20,
        backgroundColor: 'transparent',
        borderColor:'#1E2F4D',
        borderWidth:1.5,
        borderRadius:20,
        marginTop:40
      }, btntxt:{
        textAlign:'center',
        fontSize:15
      },btnbg:{
        width: "100%",
        height:62, 
        backgroundColor: '#FEB930',
        borderRadius:20,
        zIndex:-1,
        marginTop:-55,
        marginLeft:6

      }
});