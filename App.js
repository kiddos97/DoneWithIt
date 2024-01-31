import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions, TextInput} from 'react-native'
import { useEffect, useState} from 'react'
import { useDeviceOrientation } from "@react-native-community/hooks"

import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';
import ButtonExcerise from './app/assets/screens/ButtonExcerise';
import AccountScreen from './app/assets/screens/AccountScreen';
import ListingScreen from './app/assets/screens/ListingScreen';
import MessageScreen from './app/assets/screens/MessageScreen';
import LoginScreen from './app/assets/screens/LoginScreen';



{/** Components */}
import Card from './components/Card/Card';
import ListingDetails from './app/assets/screens/ListingDetails';
import AppTextInput from './components/App/AppTextInput';
import AppPicker from './components/App/AppPicker';
import RegisterScreen from './app/assets/screens/RegisterScreen';
import NewListingScreen from './app/assets/screens/NewListingScreen';
import CategoryPickerItem from './components/Menu/CategoryPickerItem';


import * as ImagePicker from 'expo-image-picker'
import * as Permissions from "expo-permissions"



export default function App() {
  console.log('app executed')

  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_BACKGROUND)
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted){
      alert('You need to enable permission to access library')
    }
  }
  

  useEffect(() => {

    requestPermission();
  
  },[])


  const selectImage = async () => {
    try {
      const result  = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if(!result.canceled){
        setImageUri(result.assets[0].uri)
      }
    } catch (error) {
      console.Log('error: ', error)
    }
    
  }
  return (

       <SafeAreaView style={styles.container}>
        <Button title="Select Image" onPress={selectImage}/>
        {imageUri && <Image source={{uri: imageUri }} style={{width:200, height:200}}/>}
       </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{

   
  }

})

