import React,{useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import configData from "../config.json";

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications


const API_KEY = configData.KEY;
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

console.log(API_KEY)

var items ="";
async function callGoogleVisionAsync(image) {

  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log('callGoogleVisionAsync -> result', result);

  items = result.responses[0].fullTextAnnotation.text;

  const detectedText = result.responses[0].fullTextAnnotation.text;

  console.log(detectedText);
  return detectedText
    ? detectedText
    : { text: "This image doesn't contain any text!" };
}


export default function CameraScreen({navigation}) {

  const [load, setLoad] = React.useState(true);
  const [image, setImage] = React.useState(null);
  const [status, setStatus] = React.useState("Analysing image");
  const [permissions, setPermissions] = React.useState(false);
  

  const askPermissionsAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    } else {
      setPermissions(true);
    }
  };

  useEffect(() => {
    askPermissionsAsync();
    takePictureAsync()
  }, []);

  

  

  const takePictureAsync = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);

      try {
        const result = await callGoogleVisionAsync(base64);
        console.log(result);
        // setStatus(result);

          navigation.navigate("Cart", items)
          console.log("should navigate")

       

      } catch (error) {
        setStatus(`Error: ${error.message}`);
      }

    } else {
      setImage(null);
      setStatus(null);
    }
  };

  return (
    <View style={styles.container}>

      <ActivityIndicator size="large" color="#FEB930" />
          {/* {image && <Image style={styles.image} source={{ uri: image }} />} */}
          {status && <Text style={styles.text}>{status}</Text>}
          {/* <Button onPress={takePictureAsync} title="Take a Picture" /> */}
          {/* <Button  onPress={()=> navigation.navigate("Cart", items)}title="Proceed to sale" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    margin: 5,
    color:'#1E2F4D'
  },
});
