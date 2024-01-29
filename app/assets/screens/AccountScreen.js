import React from 'react'
import { Image, View,StyleSheet,Text, FlatList } from 'react-native'
import ListItem from '../../../components/ListItem'
import Icon from '../../../components/Icon';
import ListitemSeparator from '../../../components/ListitemSeparator';



const menuItems = [

    {
        title:"My listings",
        icon:{
            name: 'email',
            backgroundColor:"#fff"
        }
    },
    {
        title:"My Messages",
        icon:{
            name: 'email',
            backgroundColor:"#fff"
        }
    }
]
const AccountScreen = () => {
  return (
    <View style={styles.screen}>
          <View>
            <View style={styles.container}>
                <ListItem
                title='Emmanuel Imarhiagbe'
                subTitle="Hi"
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
                ImageComponent={<Icon name={item.icon.name} color={item.icon.backgroundColor}/>}
                />}
                />
                
              </View>
          </View>
          </View>
  )
}

const styles = StyleSheet.create({

    screen:{
        backgroundColor:'lightgrey',
        flex:1
    },
    container:{
        marginVertical: 50,
        backgroundColor:'#fff',
        
        
    },
   
})
export default AccountScreen
