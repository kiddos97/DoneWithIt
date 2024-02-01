import React from 'react'
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 

const AccountNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Account'>
    <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown:false}}/>
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>
  )
}

export default AccountNavigator
