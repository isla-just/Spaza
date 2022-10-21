import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import logo from '../assets/logo.png';
import MlkitOdt, { ObjectDetectorMode } from 'react-native-mlkit-odt';

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [pickedImagePath, setPickedImagePath] = useState('');
  const [result,setResult] = useState("");

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  let camera;
  async function __takePicture(){
    if( camera ) {
      const options = {quality: 0.5};
      const data = await camera.takePictureAsync(options);
      setPickedImagePath(data.uri)
      console.log(data.uri);

      finallyOcr(data.uri)
      
      // const result = await MlkitOdt?.detectFromUri(data.uri);
      // console.log(await MlkitOdt?.detectFromUri(data.uri));
    }
  }

  const finallyOcr = async    (uri) => {

    console.log(uri)
    if(uri!=null && uri != ''){
      const result = await MlkitOdt.detectFromUri(uri, {
        detectorMode: ObjectDetectorMode.SINGLE_IMAGE,
        shouldEnableClassification: true,
        shouldEnableMultipleObjects: true,
      });

      console.log(result);
    }else{
      console.log("data not fetched")
    }
    }



  // const __takePicture = async () => {
  //   if (!camera) return
  //   const photo = await camera.current.takePictureAsync()
  //   console.log(photo)
  //   setPickedImagePath(true)
   
  // }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => (camera = ref)}>

      {/* <Image source={logo} style={styles.logo} /> */}

        <TouchableOpacity
            onPress={__takePicture}
            style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: '#fff',
            alignSelf:'center',
            bottom: 80,
            position: 'absolute',
            }}
            />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },    logo: { 
    height: 35,
    width: 146,
    marginTop: 40,
    marginBottom: 40
  },
});