import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 


import ListingScreen from '../screens/ListingScreen';
import NewListingScreen from '../screens/NewListingScreen';
import AccountNavigator from './AccountNavigator';
const ListingNavigator = () => {

    const Tab = createBottomTabNavigator();


  return (

    <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen name="Feed" component={ListingScreen} options={{headerShown:false}}/>
    <Tab.Screen name="New Listing " component={NewListingScreen}/>
    <Tab.Screen name="Account" component={AccountNavigator} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

export default ListingNavigator
