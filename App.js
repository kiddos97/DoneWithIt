import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions} from 'react-native'

import { useDeviceOrientation } from "@react-native-community/hooks"
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';
import ButtonExcerise from './app/assets/screens/ButtonExcerise';

import Card from './components/Card';
import ListingDetails from './app/assets/screens/ListingDetails';
import MessageScreen from './app/assets/screens/MessageScreen';
import AccountScreen from './app/assets/screens/AccountScreen';



export default function App() {
  console.log('app executed')
  
  return <AccountScreen/>

}


