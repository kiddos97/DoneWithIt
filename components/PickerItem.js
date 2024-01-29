import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const PickerItem = ( {label, onPress}) => {
  return (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
  )
}

export default PickerItem
