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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TweetDetails = () => {
  return (
    <View>
      <Text>Tweet Details</Text>
    </View>
  );
};
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TweetDetails')}
      />
    </View>
  );
}
// const Tweets = ({ navigation}) => {
//   return (
//   <View> 
//     <Text>Tweets</Text>
//     <Button 
//     title='View Tweet'
//     onPress={() => navigation.navigate("TweetDetails")}
//     />
//       </View>
//   )
// }



const Stack = createNativeStackNavigator();

const StackNavigator = () => (

  <Stack.Navigator initialRouteName='Tweets'>
    <Stack.Screen name="Tweet" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={HomeScreen} />
  </Stack.Navigator>

)

export default function App() {
  console.log('app executed')


  return (
  
 
       <NavigationContainer>
          <StackNavigator/>
       </NavigationContainer>


  )
}


const styles = StyleSheet.create({
  container:{
   alignItems:'center'
  }

})

