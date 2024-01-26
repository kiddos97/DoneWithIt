import { ImageBackground, StyleSheet } from "react-native"


const WelcomeScreen = () => {
  return (
  <ImageBackground 
  style={styles.background}
  source={require('.assets/background.jpg')}
  />
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})



export default WelcomeScreen
