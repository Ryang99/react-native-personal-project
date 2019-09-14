/**
* This component shows resturant images & manages layout details
* @version 1
* @author[Ruiyang Guo]
* @data: 09/08/2019
*/
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
    //show images
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // put every result in a container such that they have margins
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 130,
    borderRadius: 5,
    marginBottom: 6
  },
  name: {
    fontWeight: 'bold'
   
  }
});

export default ResultsDetail;