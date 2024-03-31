import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 

import LoginScreen from '../../assets/screens/LoginScreen'
import WelcomeScreen from '../../assets/screens/WelcomeScreen';
import RegisterScreen from '../../assets/screens/RegisterScreen';


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();


  return (

    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown:false}}/>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen}  />
  </Stack.Navigator>
  )
}

export default AuthNavigator
