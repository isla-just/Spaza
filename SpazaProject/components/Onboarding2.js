import React,{useState} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import logo from '../assets/logo.png';
import ill5 from '../assets/ill5.png';
 
const height_proportion = '100%';
const btn_prop = '80%';
const txt_prop = '90%';


 
export default function Onboarding2({navigation}) {

  const [merchant, onMerchantChange]=useState("");

    return (
        
        <SafeAreaView style={styles.container}>

          <View style={styles.slide}>

<Image source={logo} style={styles.logo} />

            <Image source={ill5} />
            <Text style={styles.title}>looking for your snapscan account</Text>
            <Text style={styles.text}>your merchant name is your snapscan username</Text>


            <TextInput
             style={styles.input}
             value={merchant}
             onChangeText={onMerchantChange}
             placeholder='merchant name'
             placeholderTextColor='#616D82'
            />

            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt} onPress={()=> navigation.navigate("Dashboard")} >that's me!</Text> 
            </TouchableOpacity>
            <View style={styles.btnbg}/>

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
        marginTop:40
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

      },   input:{
        borderBottomWidth:1,
        borderBottomColor:'#1E2F4D',
        marginTop:30,
        width:'80%',
        padding:10,
        backgroundColor:'#FFF',
        fontSize:15,
    }
});