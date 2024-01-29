import React from 'react'
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Icon = ({name, size = 40, backgroundColor='#000' ,IconColor ="#fff"}) => {
  return (
   <View style={

    {
        width: size,
        height: size,
        borderRadius: size /2,
        backgroundColor,
        justifyContent:'center',
        alignItems:'center'
    }
   }>
    <MaterialCommunityIcons name={name} color={IconColor} size={size * 0.5}/>
   </View>
  )
}

export default Icon
