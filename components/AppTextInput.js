import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from "../config/colors";

const AppTextInput = ({ icon, ...otherprops }) => {
  return (
  <View style={styles.container}>
    {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={color.medium}/>}
    <TextInput style={styles.textinput} {...otherprops}/>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'lightgrey',
        borderRadius: 25,
        flexDirection:'row',
        width:'100%',
        padding: 10,
        marginVertical: 10
    },
    icon:{
        margin:10
    },
    textinput:{
        color: color.dark,
        fontSize:18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
       
        
    }
})

export default AppTextInput