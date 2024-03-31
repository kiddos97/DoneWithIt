import React from 'react'
import { View, StyleSheet,Image,Text, TouchableOpacity} from 'react-native'

const Card = ({title, subTitle, imageUrl,onPress}) => {
  return (
   <TouchableOpacity onPress={onPress}>
       <View style={styles.card}>
        <Image style={styles.image} source={{uri:imageUrl}}/>
        <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
       </View>
   </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:200,
    },
    textContainer:{
        padding: 20
    },
    title:{
        marginBottom: 7
    },
    subTitle:{
        color:'green',
        fontWeight: 'bold'
    }
})

export default Card
