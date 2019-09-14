/** 
* This file creates the main search page users see when they open the App
* and it is where users start their searches.
* author: Ruiyang Guo
* version:1
* 08/28/2019
*/

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const {term, setTerm} = useState('');
	const [searchApi, results,errorMessage] = useResults();

	const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
	

	return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      // use ScrollView to have our results scrollable on smaller devices
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};


// searchTearm makes changes of data to our App
// by passing a call-back to SeachBar and letting SearchBar make changes
const styles = StyleSheet.create({});

export default SearchScreen;