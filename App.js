import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions, TextInput} from 'react-native'
import { useEffect, useState} from 'react'
import { useDeviceOrientation } from "@react-native-community/hooks"





{/** Components */}
import Card from './components/Card/Card';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 
import AuthNavigator from "./app/Navigation/AuthNavigator";
import ListingNavigator from './app/assets/Navigation/ListingNavigator';




export default function App() {
  console.log('app executed')


  return (
  
 <NavigationContainer>
 <ListingNavigator/>
 </NavigationContainer>


  )
}


const styles = StyleSheet.create({
  container:{
   alignItems:'center',
   justifyContent:'center',
   flex:1
  }

})

