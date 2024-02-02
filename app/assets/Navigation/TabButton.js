import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                name="plus-circle"
                color={colors.white}//Change 'blue' to the desired color
                size={40}
              />
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    iconContainer:{
    backgroundColor:colors.danger,
    borderRadius:40,
    width:80,
    height:80,
    bottom:20,
    borderColor:colors.white,
    borderWidth:10,
    alignItems:'center',
    justifyContent:'center'
    }
 
  })

export default TabButton
