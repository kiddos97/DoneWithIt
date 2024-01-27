import React from 'react'
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native'

const ButtonExcerise = () => {

    const handlebutton = () => console.log('button pressed')
  return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        textAlign:"center"
    },
    button:{    
        backgroundColor:'tomato',
        width:'70%',
        borderRadius: 10,
        padding: 10,
    
    }
})
export default ButtonExcerise
