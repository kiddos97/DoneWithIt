import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../../../components/Card/Card'; // Import or define the Card component
import ListitemSeparator from '../../../components/List/ListitemSeparator';

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

const ListingScreen = ({navigation }) => {
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
            onPress={() => navigation.navigate("ListingDetails",item)}
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
        paddingTop:40,
        backgroundColor:'lightgrey',
        flex:1
    }
})

export default ListingScreen;

