import React from 'react'
import { View, StyleSheet } from 'react-native'
import Imageinput from './Imageinput'

const ImageInputList = ({
     imageUris = [],
     onRemoveImage,
     onAddImage
}) => {
  return (
   <View style={styles.container}>
    {imageUris.map((uri) => (
    <Imageinput 
    key={uri}
    imageUri={uri} 
    onChangeImage={() => onRemoveImage(uri)} 
    />
    ))}
    <Imageinput onChangeImage={(uri) => onAddImage(uri)}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{

        flexDirection:'row'
    }
})

export default ImageInputList
