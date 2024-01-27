import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,View } from 'react-native'
import ListItem from '../../../components/ListItem'

import ListitemSeparator from '../../../components/ListitemSeparator'


const message =[ {


    id: 1, title: 't1', description: 'D1',image:require('../person.jpg')
},

{
    id: 2, title: 't2', description: 'D2',image:require('../person.jpg')
},

]

const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
 <FlatList 
    data={message}
    keyExtractor={(message) => message.id.toString()}
    renderItem={({ item }) => 
    <ListItem
    title={item.title}
    subTitle={item.description}
    image={item.image}/>}
    ItemSeparatorComponent={ListitemSeparator}
  />
    
    </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
    screen:{
        paddingtop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default MessageScreen
