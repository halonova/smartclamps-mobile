import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OpenLoading from './src/Pages/OpenLoading/index'
import CredentialsLogin from './src/Pages/CredentialsLogin';
import MainMenu from './src/Pages/MainMenu';
import CameraScreen from './src/Pages/CameraScreen';

export default function App() {
  return (
    <View>
      <CameraScreen/>
    </View>
  );
}

