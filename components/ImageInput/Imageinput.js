import React, { useEffect } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native'
import colors from '../../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'







const Imageinput = ({ imageUri, onChangeImage }) => {
 

    useEffect(() => {
        requestPermission();
    },[])


    const requestPermission = async () => {

        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted){
          alert('You need to enable permission to access library')
        }
      }
      
 
    const handlePress = () => {
        if(!imageUri){
            selectImage();
        }else{
            Alert.alert('Delete','Are you sure?', [
                {text: 'Yes', onPress: () => onChangeImage(null)},
                { text:'No'}])
        }
    }
    const selectImage = async () => {
        try {
          const result  = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
          if(!result.canceled){
            onChangeImage(result.assets[0].uri)
          }
        } catch (error) {
          console.log('error: ', error)
        }
        
      }
      

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40}/>}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height: 100,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
export default Imageinput
