import React from 'react'
import { Image, View,StyleSheet,Text, FlatList } from 'react-native'
import ListItem from '../../../components/ListItem'
import Icon from '../../../components/Icon';
import ListitemSeparator from '../../../components/ListitemSeparator';



const menuItems = [

    {
        title:"My listings",
        icon:{
            name: 'format-list-bulleted',
            backgroundColor:"red"
        }
    },
    {
        title:"My Messages",
        icon:{
            name: 'email',
            backgroundColor:"green"
        }
    }
]
const AccountScreen = () => {
  return (
    <View style={styles.screen}>
          <View>
            <View style={styles.Accountcontainer}>
                <ListItem
                title='Emmanuel Imarhiagbe'
                subTitle="Osaroimarhiagbe@gmail.com"
                image={require('../person.jpg')}
                />
            </View>
              <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItems => menuItems.title}
                ItemSeparatorComponent={ListitemSeparator}
                renderItem={({ item }) =>   
                <ListItem
                title={item.title}
                ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
                />}
                />
                
              </View>
          </View>
          </View>
  )
}

const styles = StyleSheet.create({

    Accountcontainer:{
        marginVertical: 70,
        backgroundColor:'#fff',  
    },
    screen:{
        backgroundColor:'lightgrey',
        flex:1
    },
    container:{
        backgroundColor:'#fff',
        
        
    },
   
})
export default AccountScreen
