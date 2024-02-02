import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native"



const WelcomeScreen = ({ navigation }) => {
  
  
  return (
    <ImageBackground
      style={styles.background}
      source={require('../background.jpg')}
      blurRadius={10}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../mango.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer:{
    width:'100%',
    padding:20,
    marginVertical:20,
  },
  buttonText:{
    fontSize:20,
    textAlign:"center",
    color:'white'
  },
  container:{
    position:'absolute',
    top: 70,
    alignItems:'center'
  },
  logo:{
    width: 200,
    height: 100
  },

  loginButton:{
    backgroundColor:'tomato',
    padding:10,
    borderRadius: 30,
  },
  registerButton:{
    backgroundColor:'#4ecdc4',
    marginTop: 10,
    borderRadius:30,
    padding: 10,
  },
  tagline:{
    fontWeight:"600",
    fontSize:25,
    paddingVertical:20
  },

})


export default WelcomeScreen
