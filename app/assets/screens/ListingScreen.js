import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../../../components/Card'; // Import or define the Card component
import ListitemSeparator from '../../../components/ListitemSeparator';

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
    const renderSeparator = () => {
        return <View style={{ height: 20 }} />; // Adjust the height as needed
      };
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
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        paddingTop:60,
        backgroundColor:'lightgrey',
        flex:1
    }
})

export default ListingScreen;

