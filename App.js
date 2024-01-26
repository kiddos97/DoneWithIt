import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback} from 'react-native'
export default function App() {

  console.log('App executed')


  return (
    <SafeAreaView style={styles.container}>
      <Text>I am home</Text>
      <TouchableWithoutFeedback onPress={() => console.log('image tapped')}><Image source={require('./assets/favicon.png')}/></TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent : "center",
    alignItems: "center"

  },
});
