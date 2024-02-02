import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ListingScreen from '../screens/ListingScreen';
import ListingDetails from '../screens/ListingDetails';



const FeedNavigator = () => {
    const Stack = new createNativeStackNavigator();
  return (
   <Stack.Navigator initialRouteName="Listing">
    <Stack.Screen name="Listing" component={ListingScreen} options={{headerShown:false}}/>
    <Stack.Screen name="ListingDetails" component={ListingDetails}/>
   </Stack.Navigator>
  )
}

export default FeedNavigator
