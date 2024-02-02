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
          color={route.name === 'Feed' ? colors.dark : color} // Change 'blue' to the desired color
          size={size} 
        />
      ),
      headerShown:false,
    })}
    />
    <Tab.Screen
    name="New Listing "
    component={NewListingScreen}
    options={{headerShown:false}}
    />
    <Tab.Screen 
    name="AccountNav" 
    component={AccountNavigator} 
    options={({ route }) => ({
      headerShown: false,
      tabBarLabel: 'Account',
      tabBarIcon: ({ color,size }) => (
        <MaterialCommunityIcons 
          name="account" 
          color={route.name === 'AccountNav' ? colors.dark : colors.light } // Change 'blue' to the desired color
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
