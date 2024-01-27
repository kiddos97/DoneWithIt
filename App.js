import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions} from 'react-native'

import { useDeviceOrientation } from "@react-native-community/hooks"
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';
import ButtonExcerise from './app/assets/screens/ButtonExcerise';

import Card from './components/Card';



export default function App() {
  
  return <View style={{
    backgroundColor:'#f8f4f4',
    padding: 20,
    paddingTop: 100
  }}>
    <Card 
    title="Red Jacket"
    subTitle="$100"
    image={require("./app/assets/jacket.jpg")}/>
  </View>

}


