import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { MainStyles } from '../Styles/MainStyles';

const CameraScreen = ({ navigation }) =>{
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null)
    const [picture, setPicture] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
   
    
    const takePicture = async  ()=> {
        if(camera){
          const data = await camera.takePictureAsync(null);
          console.log(data.uri)
          setPicture(data.uri)
        }
    } 

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        <Camera 
        ref={ref=>setCamera(ref)}

        ratio="16:9" 
        style={styles.camera} 
        type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <TouchableOpacity style={MainStyles.button} title="Take Photo" onPress={()=> takePicture()}>
          <Text style={MainStyles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
        {picture && <Image style={{flex:1}} source={{uri:picture}}/>}
      </View>
    );
  }

  export default CameraScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });