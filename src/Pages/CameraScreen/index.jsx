// FOR WEBCAM / WEB
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import Webcam from 'react-webcam';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [photo, setPhoto] = useState(null);

  const cameraRef = useRef(null);
  const webcamRef = useRef(null);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } else {
        setHasPermission(true); 
      }
    })();
  }, []);

  const takePicture = async () => {
    if (Platform.OS === 'web' && webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setPhoto(screenshot);
    } else if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  const handleCancel = () => {
    setPhoto(null);
  };

  const handleConfirm = () => {
    // Do something with the confirmed photo (e.g., upload or save it)
    console.log('Photo confirmed:', photo);
    setPhoto(null);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.preview} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel} style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirm} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        Platform.OS === 'web' ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={styles.webcam}
          />
        ) : (
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={cameraRef}
            onCameraReady={() => setCameraReady(true)}
          >
            <View style={styles.cameraButtonContainer}>
              <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
                <Text style={styles.buttonText}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  webcam: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cameraButtonContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 20,
  },
  captureButton: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});




// FOR MOBILE // ANDROID
// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';

// export default CameraScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraReady, setCameraReady] = useState(false);
//   const [camera, setCamera] = useState(null);
//   const [photo, setPhoto] = useState(null);

//   const cameraRef = useRef(null);

//   React.useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current && cameraReady) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setPhoto(photo.uri);
//     }
//   };

//   const handleCancel = () => {
//     setPhoto(null);
//   };

//   const handleConfirm = () => {
//     // Do something with the confirmed photo (e.g., upload or save it)
//     console.log('Photo confirmed:', photo);
//     setPhoto(null);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {photo ? (
//         <View style={styles.previewContainer}>
//           <Image source={{ uri: photo }} style={styles.preview} />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={handleCancel} style={styles.button}>
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleConfirm} style={styles.button}>
//               <Text style={styles.buttonText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <Camera
//           style={styles.camera}
//           type={Camera.Constants.Type.back}
//           ref={cameraRef}
//           onCameraReady={() => setCameraReady(true)}
//         >
//           <View style={styles.cameraButtonContainer}>
//             <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
//               <Text style={styles.buttonText}>Take Picture</Text>
//             </TouchableOpacity>
//           </View>
//         </Camera>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   cameraButtonContainer: {
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   captureButton: {
//     width: 100,
//     height: 40,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   previewContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   preview: {
//     width: '100%',
//     height: '80%',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   button: {
//     width: 100,
//     height: 40,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
