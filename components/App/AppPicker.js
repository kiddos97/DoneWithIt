import React, { useState } from 'react'
import {  View, StyleSheet,Text, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from "../../config/colors";
import PickerItem from '../Menu/PickerItem';

const AppPicker = ({ icon,items, onSelectItem,PickerItemComponent =PickerItem, selectedItem, placeholder, width="100%"}) => {


    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => setModalVisible(true);
  return (
    <>
  <TouchableWithoutFeedback onPress={handleModal}>
      <View style={[styles.container, { width } ]}>
        {icon &&
        <MaterialCommunityIcons
        name={icon}
        size={20}
        style={styles.icon}
        color={color.medium}/>}
        <View style={styles.textContainer}>
            <Text>{ selectedItem ? selectedItem.label : placeholder}</Text>
        </View>
        <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        style={styles.icon}
        color={color.medium}/>
      </View>
  </TouchableWithoutFeedback>
  <Modal visible={modalVisible} animationType='slide'>
    <SafeAreaView>
        <Button title="Close" onPress={() => setModalVisible(false)}/>
        <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => 
                <PickerItemComponent 
                item={item}
                label={item.label}
                onPress={() => {
                    setModalVisible(false)
                    onSelectItem(item)
                }}/>
            }
        />
        </SafeAreaView>
  </Modal>
  </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:color.light,
        borderRadius: 25,
        flexDirection:'row',
        padding: 10,
        marginVertical: 10
    },
    icon:{
        margin:10
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
    },
 
 
})

export default AppPicker