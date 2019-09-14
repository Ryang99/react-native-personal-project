/**
* This file shows search results to users
* @author: Ruiyang Guo
* @version: v2
* @data: 09/10/2019
*/

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
	// our state
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  // use this id to make request below from API 


  const getResult = async id => {
  	// make request to get a response object
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
