import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 


import ListingScreen from '../screens/ListingScreen';
import NewListingScreen from '../screens/NewListingScreen';
import AccountNavigator from './AccountNavigator';

import colors from '../../../config/colors';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListingNavigator = () => {

    const Tab = createBottomTabNavigator();


  return (

    <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen 
    name="Feed" 
    color={colors.dark}
    component={ListingScreen}
    options={({ route }) => ({
      headerShown: false,
      tabBarLabel: 'Feed',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons 
          name="home" 
          color={route.name === 'Feed' ? 'blue' : color} // Change 'blue' to the desired color
          size={size} 
        />
      ),
      headerShown:false,
    })}
    />
    <Tab.Screen name="New Listing " component={NewListingScreen}/>
    <Tab.Screen 
    name="Account" 
    component={AccountNavigator} 
    options={({ route }) => ({
      headerShown: false,
      tabBarLabel: 'Feed',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons 
          name="account" 
          color={route.name === 'Account' ? 'blue' : color} // Change 'blue' to the desired color
          size={size} 
        />
      ),
      headerShown:false,
    })}
    />
    </Tab.Navigator>
  )
}

export default ListingNavigator
