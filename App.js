import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, Button,Alert, Platform, Dimensions} from 'react-native'
export default function App() {

  console.log('App executed')
  console.log(Dimensions.get('screen'))

  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor:"dodgerblue",
      width: '100%',
      height: '30%'
    }}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },

});
