import React from 'react'
import { View, StyleSheet, Image,Text, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ListItem = ({ title, subTitle, image, onPress, renderRightActions,renderLeftActions}) => {


  return (
    <GestureHandlerRootView> 
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}> 
    <TouchableHighlight 
    underlayColor="grey"
    onPress={onPress}>
        <View style={styles.container}>
         <Image style={styles.image} source={image} />
         <View>
             <Text style={styles.title}>{title}</Text>
             <Text  style={styles.subTitle} >{subTitle}</Text>
         </View>
        </View>
    </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
   
    
 
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding: 15
    },
    image:{
        width:70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title:{
        fontWeight: 500
    },
    subTitle:{
        color:'#6e6969'
    }
})

export default ListItem
