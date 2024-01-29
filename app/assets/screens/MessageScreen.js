import React, { useState } from 'react'

import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,View ,Text,TouchableOp, TouchableOpacity} from 'react-native'
import ListItem from '../../../components/ListItem'

import ListItemDelete from '../../../components/ListItemDelete'

import ListitemSeparator from '../../../components/ListitemSeparator'

import { message } from '../../../components/Message';



const MessageScreen = () => {

  const [messages, setMessage] = useState(message);

  const handleDelete = (message) => {
    
    setMessage(messages.filter((m) => m.id !== message.id));

  }
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={message}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => 
            <ListItemDelete onPress={ () => handleDelete(item)}/>}
            renderLeftActions={() => (
              <TouchableOpacity onPress={() => console.log('archived pressed')}>   
                <View
              style={{
                width:70,
                backgroundColor:'blue',
                height:'100%',
                justifyContent:'center',
                alignItems:'center'
              }}
              ><Text style={styles.text}>Archive</Text></View></TouchableOpacity>
         
            )}
          />
          
        )}
        ItemSeparatorComponent={ListitemSeparator} // Make sure ListitemSeparator is defined or import correctly
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    screen:{
        paddingtop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    text:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15
    }
})

export default MessageScreen
