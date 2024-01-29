import React from 'react'
import { View, StyleSheet, Image,Text, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ListItem = ({ title, subTitle, image, ImageComponent,onPress, renderRightActions,renderLeftActions}) => {


  return (
    <GestureHandlerRootView> 
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}> 
    <TouchableHighlight 
    underlayColor="grey"
    onPress={onPress}>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
        {ImageComponent}
        </View>
         {image && <Image style={styles.image} source={image} />}
         <View style={styles.detailsContainer}>
             <Text style={styles.title}>{title}</Text>
             { subTitle && <Text  style={styles.subTitle} >{subTitle}</Text>}
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
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center'
    },
    iconContainer:{
        borderRadius:50,
    },
    image:{
        width:50,
        height: 50,
        borderRadius: 50,
        marginRight:10
    },
    title:{
        fontWeight: 500,
        marginBottom:5
        
    },
    subTitle:{
        color:'#6e6969'
    }
})

export default ListItem
