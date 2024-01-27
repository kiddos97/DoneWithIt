import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native"


const WelcomeScreen = () => {
  const handleRegister = () => console.log('register button pressed')
  const handleLogin = () => console.log('login button pressed')
  return (
    <ImageBackground
      style={styles.background}
      source={require('../background.jpg')}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../logo.png')} />
        <Text style={styles.text}>Sell what you need</Text>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text:{
    fontSize:15
  },
  loginButton:{
    backgroundColor:'tomato',
    width:'85%',
    padding:20,
    borderRadius: 30,
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
  buttonText:{
    fontSize:20,
    textAlign:"center",
    color:'white'
  },
  registerButton:{
    backgroundColor:'#4ecdc4',
    width: '85%',
    marginTop: 10,
    borderRadius:30,
    padding: 20,
    marginBottom:30
  },
  space: {
    height: 10 // Adjust this value for the desired space
  },

})


export default WelcomeScreen
