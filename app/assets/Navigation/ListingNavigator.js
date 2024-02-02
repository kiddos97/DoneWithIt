import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import ListingScreen from '../screens/ListingScreen';
import NewListingScreen from '../screens/NewListingScreen';
import AccountNavigator from './AccountNavigator';

import colors from '../../../config/colors';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedNavigator from './FeedNavigator';
import TabButton from './TabButton';

const ListingNavigator = () => {

    const Tab = createBottomTabNavigator();



  return (

    <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor:colors.danger
        }}
    >
  
      <Tab.Screen
      name="Feed"
      color={colors.dark}
      component={FeedNavigator}
      options={({ route }) => ({
        headerShown: false,
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={route.name === 'Feed' ? colors.danger : color} // Change 'blue' to the desired color
            size={size}
          />
        ),
        headerShown:false,
      })}
      />
      <Tab.Screen
      name="Listing"
      component={NewListingScreen}
      options={({navigation }) => ({
        headerShown: false,
        tabBarButton: () => <TabButton onPress={() => navigation.navigate('Listing')}/>,
        tabBarLabel:'Listing',
        tabBarIcon: ({ color,size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color} // Change 'blue' to the desired color
            size={size}
          />
        ),
        headerShown:false,
      })}
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
          color={route.name === 'AccountNav' ? colors.danger : colors.light } // Change 'blue' to the desired color
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
