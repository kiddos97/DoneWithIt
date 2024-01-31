import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from '../Icon/Icon'

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>

        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <Text>{item.label}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})
export default CategoryPickerItem
