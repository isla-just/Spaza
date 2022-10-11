
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Intro from './components/Intro';

import {db} from "./Firebase";
import { doc, setDoc, collection, query, orderBy, startAt, endAt, getDoc } from "firebase/firestore";

//firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

//add longed in auth

export default function App() {

    //defining the stack
    const Stack= createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>

      {/* //change this later */}
    <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" component ={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component ={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component ={Signup} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Intro" component ={Intro} options={{headerShown:false}}/> */}
    
    </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
