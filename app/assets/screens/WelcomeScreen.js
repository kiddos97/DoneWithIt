import { Image, ImageBackground, StyleSheet, View, Text } from "react-native"


const WelcomeScreen = () => {
  return (
  <ImageBackground 
  style={styles.background}
  source={require('../background.jpg')}
  >
    <View style={styles.container}>
    <Image 
    style={styles.logo}
    source={require("../logo.png")}></Image>
    <Text>Sell what you dont' need</Text></View>
    <View
    style={styles.loginButton}
    ></View>
      <View 
    style={styles.registerButton}
    ></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    logo:{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
       
    },
    container: {
        position: 'absolute',
        top: 70,
        alignItems:"center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    
})



export default WelcomeScreen
