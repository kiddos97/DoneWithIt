import React from 'react'
import {View, StyleSheet, ImageComponent, Image,Text } from 'react-native'

import ListItem from '../../../components/List/ListItem'

const ListingDetails = ({ route }) => {

    const listing = route.params;
  return (
  <View>
    {listing.image && <Image style={styles.image} source={listing.image}/>}
      <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>{'$ ' + listing.price}</Text>
          <View style={styles.user}> 
              <ListItem
              image={require('../person.jpg')}
              title='Emmanuel Imarhiagbe'
              subTitle='5 Listings'
              />
          </View>
      </View>
  </View>
  )
}


const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 500
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize: 24,
        fontWeight: 500,
    },
    price:{
        color:'green',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10

    },
    user:{
        marginVertical: 50
    }
})
export default ListingDetails
