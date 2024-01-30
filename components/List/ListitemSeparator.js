import React from 'react'
import { StyleSheet, View } from "react-native"

const ListitemSeparator = () => {
  return (
    <View style={styles.separator}/>

  
  )
}

const styles = StyleSheet.create({
    separator:{
        width: '100%',
        height: 1,
        backgroundColor:'grey'
    }
})

export default ListitemSeparator
