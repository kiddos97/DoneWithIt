import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import DeleteIcon  from "react-native-vector-icons/AntDesign"// Replace 'FontAwesome' with the desired icon set

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <Icon  name="close" size={30} color='#fff'/>
        </View>
        <View style={styles.deleteIcon}>
            <DeleteIcon  name="delete" size={30} color="#fff"/>
        </View>
        <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../chair.jpg')}></Image>
    </View>

  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#000',
        flex: 1
    },
    closeIcon:{
        position:'absolute',
        top:60,
        right: 30,

    },
    deleteIcon:{
        position:'absolute',
        top:60,
        left: 30,

    },
  
    image:{
        width: '100%',
        height: '100%'
    }
})


export default ViewImageScreen
