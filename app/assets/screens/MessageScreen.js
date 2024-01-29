import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar,View ,Text,TouchableOp, TouchableOpacity} from 'react-native'
import ListItem from '../../../components/ListItem'

import ListItemDelete from '../../../components/ListItemDelete'

import ListitemSeparator from '../../../components/ListitemSeparator'


const message =[
  {
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => 
            <ListItemDelete onPress={() => console.log(item)}/>}
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
