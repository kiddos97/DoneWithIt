import React from 'react'
import { Image, View,StyleSheet,Text, FlatList, TouchableOpacity } from 'react-native'
import ListItem from '../../../components/List/ListItem'
import Icon from '../../../components/Icon/Icon';
import ListitemSeparator from '../../../components/List/ListitemSeparator';
import { menuItems} from '../../../components/Menu/MenuItems';



const AccountScreen = ({ navigation }) => {
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
                  <TouchableOpacity>
                    <FlatList
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    renderItem={({ item }) =>
                    <ListItem
                    title={item.title}
                    IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                    /> }
                    onPress={() => navigation.navigate(item.targetScreen) }
                    />}
                    />
                  </TouchableOpacity>
                </View>
              <View style={styles.space}></View>
              <View style={styles.container}>
              <ListItem
               title='Log Out'
               IconComponent={<Icon name='logout' backgroundColor='#ffe66d'/>} 
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
    space:{
        height:30
    }
   
})
export default AccountScreen
