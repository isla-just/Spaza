import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const API_KEY = 'AIzaSyD7dX-lQ1mnaMios3A_fk8Z8OOVqnyRWHc';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

async function callGoogleVisionAsync(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 5,
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

  return result.responses[0].labelAnnotations[0].description;
}

export default function CameraScreen() {
  const [image, setImage] = React.useState(null);
  const [status, setStatus] = React.useState(null);
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

  const takePictureAsync = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);
      setStatus('Loading...');
      try {
        const result = await callGoogleVisionAsync(base64);
        setStatus(result);
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
      {permissions === false ? (
        <Button onPress={askPermissionsAsync} title="Ask permissions" />
      ) : (
        <>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {status && <Text style={styles.text}>{status}</Text>}
          <Button onPress={takePictureAsync} title="Take a Picture" />
        </>
      )}
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
  },
});

// import { Camera, CameraType } from 'expo-camera';
// import { useState, useRef } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import logo from '../assets/logo.png';
// import MlkitOdt, { ObjectDetectorMode } from 'react-native-mlkit-odt';

// import Environment from "../config/environment";

// import {getStorage, ref, uploadBytes}from 'firebase/storage'

// const storage = getStorage();

// export default function CameraScreen() {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   const [pickedImagePath, setPickedImagePath] = useState('');
//   const [result,setResult] = useState("");

//   const [googleResponse,setGoogleResponse] = useState(null);

//   if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   const [image, setImage] = React.useState(null);
//   const [status, setStatus] = React.useState(null);
//   const takePictureAsync = async () => {
//     const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
//       base64: true,
//     });

//     if (!cancelled) {
//       setImage(uri);
//       setStatus('Loading...');
//       try {
        
//         // Call the Google API here

//       } catch (error) {
//         setStatus(`Error: ${error.message}`);
//       }
//     } else {
//       setImage(null);
//       setStatus(null);
//     }
//   };

//   let camera;
//   async function __takePicture(){
//     if( camera ) {

//       const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
//         base64: true,
//       });
  
//       const options = {quality: 0.5};
//       const data = await camera.takePictureAsync(options);
//       setPickedImagePath(data.uri)
//       // console.log(data.uri);

//       //formatting - reference ppint

//       let indexpt = data.uri.lastIndexOf("/");

//       let sliced = data.uri.slice(indexpt + 1, data.uri.length);
//       console.log(sliced)

//       const storageRef = ref(storage, 'image/'+sliced);

//       uploadBytes(storageRef, data.uri).then((snapshot)=>{
//         console.log("uploaded")
//       })

//       // uploadBytes(storageRef, sliced).then((snapshot)=>{
//       //   console.log("uploaded")
//       // })

//       setResult(data.uri)
//       // submitToGoogle(data.uri)
//     }
//   }

//   submitToGoogle = async () => {

//     console.log(result);

//     try {
// //set loading to true here
//       let body = JSON.stringify({
//         requests: [
//           {
//             features: [
//               { type: "LABEL_DETECTION", maxResults: 10 },
//               // { type: "LANDMARK_DETECTION", maxResults: 5 },
//               // { type: "FACE_DETECTION", maxResults: 5 },
//               { type: "LOGO_DETECTION", maxResults: 5 },
//               { type: "TEXT_DETECTION", maxResults: 5 },
//               // { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
//               // { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
//               { type: "IMAGE_PROPERTIES", maxResults: 5 },
//               // { type: "CROP_HINTS", maxResults: 5 },
//               { type: "WEB_DETECTION", maxResults: 5 }
//             ],
//             image: {
//               source: {
//                 imageUri: "gs://image/"+result
//               }
//             }
//           }
//         ]
//       });
//       let response = await fetch(
//         "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD7dX-lQ1mnaMios3A_fk8Z8OOVqnyRWHc",
//         {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//           },
//           method: "POST",
//           body: body
//         }
//       );
//       let responseJson = await response.json();
//       console.log(responseJson);

//       setGoogleResponse({
//         googleResponse: responseJson,
//         uploading: false
//       })
  
//     } catch (error) {
//       console.log(error);
//     }
//   }//submit to google
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type} ref={ref => (camera = ref)}>

//       {/* <Image source={logo} style={styles.logo} /> */}

//         <TouchableOpacity
//             onPress={__takePicture}
//             style={{
//             width: 70,
//             height: 70,
//             bottom: 0,
//             borderRadius: 50,
//             backgroundColor: '#fff',
//             alignSelf:'center',
//             bottom: 80,
//             position: 'absolute',
//             }}
//             />

// <TouchableOpacity
//             onPress={submitToGoogle}  style={{
//               width: 70,
//               height: 70,
//               alignSelf:'center',
//               bottom: 200,
//               position: 'absolute',
//               }}>
//               <Text>Analyse</Text>
//             </TouchableOpacity>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },    logo: { 
//     height: 35,
//     width: 146,
//     marginTop: 40,
//     marginBottom: 40
//   },
// });