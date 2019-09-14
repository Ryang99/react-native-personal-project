/** This file creates a search bar where users can search with key words
* author: Ruiyang Guo
* version:1
* 08/28/2019
*/
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// Feather is the name of the search icon I use
import { Feather } from '@expo/vector-icons';


// destruct two props:
const SearchBar = ( { term, onTermChange, onTermSubmitted }) => {
	return (
	<View style={styles.background}>
	<Feather name="search"  size={30} />
	<TextInput 
	autoCapitalize="none"
	autoCorrect={false}
	style={styles.inputStyle} 
	placeholder="Search" /> 
	value={term}
	// pass references to below functions
	onChangeText={onTermChange}
	onEndEditing={onTermSubmitted}
	</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'

	},
	inputStyle : {
		borderColor: 'black',
		borderWidth: 1,
		flex: 1
	}
});

export default SearchBar;