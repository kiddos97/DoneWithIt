import React, { useState } from 'react'
import {  View, StyleSheet,Text, TouchableWithoutFeedback, Modal, Button, SafeAreaView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from "../config/colors";
import PickerItem from './PickerItem';

const AppPicker = ({ icon,items,placeholder}) => {


    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => setModalVisible(true);
  return (
    <>
  <TouchableWithoutFeedback onPress={handleModal}>
      <View style={styles.container}>
        {icon &&
        <MaterialCommunityIcons
        name={icon}
        size={20}
        style={styles.icon}
        color={color.medium}/>}
        <View style={styles.textContainer}>
            <Text>{placeholder}</Text>
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
            
                <PickerItem label={item.label}
                onPress={() => console.log(item)}/>

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
        width:'100%',
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