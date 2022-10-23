import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import logo from '../assets/logo.png';
import MlkitOdt, { ObjectDetectorMode } from 'react-native-mlkit-odt';

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [result,setResult] = useState({});
  const [, setImage] = useState();

  if (result) {
    console.log('[RESULT]', result);
  }

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
      // setPickedImagePath(data.uri)
      setResult(data)

      console.log(data.uri);

      finallyOcr(data)
    
    }
  }

  const finallyOcr = async    (data) => {

    if (!data.uri) {
      throw new Error('oh!');
    }
    try {
      setImage(data);
      setResult(
        await MlkitOdt.detectFromUri(data.uri, {
          detectorMode: 1,
          shouldEnableClassification: true,
          shouldEnableMultipleObjects: true,
        })
      );
    } catch (e) {
      console.error(e);
    }
    }

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