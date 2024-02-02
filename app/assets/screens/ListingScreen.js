import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../../../components/Card/Card'; // Import or define the Card component
import colors from '../../../config/colors';

import listingsApi from "../../Back-End/api/listings";



const ListingScreen = ({navigation }) => {
  const [listings, setListings] =useState([]);


const loadListings = async () => {
  const response = await listingsApi.getListings();
  setListings(response.data)
}

useEffect(() => {
  loadListings();
},[])
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
            imageUrl={item.images[0].url}
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
        backgroundColor:colors.light,
        flex:1
    }
})

export default ListingScreen;

