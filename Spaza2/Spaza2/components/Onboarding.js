
import React,{useState} from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import {color} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import logo from '../assets/logo.png';
import ill1 from '../assets/ill1.png';
import Intro from './Intro'

import AppIntroSlider from 'react-native-app-intro-slider';

const height_proportion = '100%';

export default function Onboarding({navigation}) {

    return (

  //     <View style={styles.container}>
  //  <Button
  //     style={styles.btn}
  //     title="Go to Details"
  //     onPress={() => navigation.navigate('Signup')}
  //   />
  //     </View>
   

 <Intro navigation={navigation}/>

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
btn:{
        backgroundColor:'#000'
      }
    
});