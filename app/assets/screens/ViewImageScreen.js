import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
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
        height: 50,
        width:50,
        backgroundColor:'tomato',
        position:'absolute',
        top:40,
        right: 30,
        borderRadius: 10

    },
    deleteIcon:{
        height: 50,
        width:50,
        backgroundColor:'tomato',
        position:'absolute',
        top:40,
        left: 30,
        borderRadius: 10

    },
  
    image:{
        width: '100%',
        height: '100%'
    }
})


export default ViewImageScreen
