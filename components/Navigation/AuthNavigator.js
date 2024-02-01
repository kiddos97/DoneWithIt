import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 

import LoginScreen from '../../app/assets/screens/LoginScreen';
import WelcomeScreen from '../../app/assets/screens/WelcomeScreen';
import RegisterScreen from '../../app/assets/screens/RegisterScreen';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();


  return (

    <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown:false}}/>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown:false}} />
  </Stack.Navigator>
  )
}

export default AuthNavigator
