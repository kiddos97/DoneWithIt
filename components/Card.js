import React from 'react'
import { View, StyleSheet} from 'react-native'

const Card = ({title, subTitle, image}) => {
  return (
   <View style={styles.card}>
    <Image source={require(image)}/>
    <Text>{title}</Text>
    <Text>{subTitle}</Text>
   </View>
  )
}


const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: '#fff',
        marguinBottom: 20
    }
})

export default Card
