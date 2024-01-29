import React from 'react'
import { View, StyleSheet,Image,Text} from 'react-native'

const Card = ({title, subTitle, image}) => {
  return (
   <View style={styles.card}>
    <Image style={styles.image} source={image}/>
    <View style={styles.textContainer}> 
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
   </View>
  )
}


const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: '#fff',
        marguinBottom: 20,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:400,
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
