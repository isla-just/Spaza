
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Intro from './components/Intro';
import Onboarding1 from './components/Onboarding1';
import Onboarding2 from './components/Onboarding2';
import Dashboard from './components/Dashboard';
import SellInstructions from './components/SellInstructions';
import CameraScreen from './components/CameraScreen';
import Stocktake from './components/Stocktake';
import Cart from './components/Cart';
import SnapCode from './components/SnapCode';

import {db} from "./Firebase";
import { doc, setDoc, collection, query, orderBy, startAt, endAt, getDoc } from "firebase/firestore";

//firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import Success from './components/Success';

//add longed in auth

export default function App() {

    //defining the stack
    const Stack= createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>

      {/* //change this later */}
    <Stack.Navigator initialRouteName='SellInstructions'>
        <Stack.Screen name="Onboarding" component ={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component ={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component ={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding1" component ={Onboarding1} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding2" component ={Onboarding2} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component ={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="SellInstructions" component ={SellInstructions} options={{headerShown:false}}/>
        <Stack.Screen name="CameraScreen" component ={CameraScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Stocktake" component ={Stocktake} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component ={Cart} options={{headerShown:false}}/>
        <Stack.Screen name="SnapCode" component ={SnapCode} options={{headerShown:false}}/>
        <Stack.Screen name="Success" component ={Success} options={{headerShown:false}}/>
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
