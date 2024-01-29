import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions, TextInput} from 'react-native'
import { useState} from 'react'
import { useDeviceOrientation } from "@react-native-community/hooks"
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';
import ButtonExcerise from './app/assets/screens/ButtonExcerise';

import Card from './components/Card';
import ListingDetails from './app/assets/screens/ListingDetails';
import MessageScreen from './app/assets/screens/MessageScreen';
import AccountScreen from './app/assets/screens/AccountScreen';
import ListingScreen from './app/assets/screens/ListingScreen';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';



const categories = [

  {label: "Furniture", value:1},
  {label: "Clothing", value:2},
  {label: "Cameras", value:3},
  
]

export default function App() {
  console.log('app executed')

  const [firstName, setfirstName] = useState('');

  
  return (
  <SafeAreaView>
  <AppPicker items = {categories} icon="apps" placeholder="Category" />
  <AppTextInput icon="email" placeholder="Email"/>
  </SafeAreaView>
  
  )

}

const styles = StyleSheet.create({
  container:{
    padding:20
  }
})

