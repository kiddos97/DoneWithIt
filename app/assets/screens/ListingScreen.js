import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../../../components/Card'; // Import or define the Card component

const listings = [
  {
    id: 1,
    title: 'Red Jacket for Sale',
    price: 100,
    image: require('../jacket.jpg'),
  },
  {
    id: 2,
    title: 'Blue Jacket for Sale',
    price: 120,
    image: require('../bluejacket.jpg'),
  },
];

const ListingScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$ ' + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        padding: 30
    }
})

export default ListingScreen;

