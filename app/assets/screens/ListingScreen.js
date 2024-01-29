import React from 'react'

import { FlatList, Text, View} from 'react-native'


const listing =[
    [
        {
            id: 1,
        title: 'red jacket for sale',
        price: 100,
        image: require('../jacket.jpg')
    },
    {
        id: 2,
    title: 'red jacket for sale',
    price: 100,
    image: require('../jacket.jpg')
},
    ]
]

const ListingScreen = () => {
  return (
   <View>
    <FlatList
    data={listing}
    keyExtractor={(listing) => listing.id.toString()}
    renderItem={({item}) => 
    
    <Card
    title={item.title}
    subTitle={'$' + item.price}
    image={item.image}
    />}
    
    />
   
   </View>
  )
}

export default ListingScreen
