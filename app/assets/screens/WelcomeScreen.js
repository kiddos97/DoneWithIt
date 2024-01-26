import { Image, ImageBackground, StyleSheet, View, Text } from "react-native"


const WelcomeScreen = () => {
  return (
   
      <ImageBackground
        style = {styles.background}
        source={require('../background.jpg')}>
        <View style ={styles.container}>
          <Image
          style={styles.logo}
          source={require('../logo.png')}/>
          <Text>Sell what you need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
  
  
  )
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton:{
    backgroundColor:'tomato',
    width:'100%',
    height:70
  },
  container:{
    position:'absolute',
    top: 70,
    alignItems:'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  registerButton:{
    backgroundColor:'#4ecdc4',
    width:'100%',
    height:70
  }

})


export default WelcomeScreen
