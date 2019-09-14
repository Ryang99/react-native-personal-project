/**
* This file makes search results in list.
* author: Ruiyang Guo
* version: v2
* data: 09/03/2019
*/
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
	return (
		<View>
		<Text style={styles.title}>{title}</Text>
		<FlatList
		horizontal
		showsHorizontalScrollIndicator={false}
		data={results}
		keyExtractor={(results) => results.id}
		renderItem={(item) => {
			return <ResultsDetail result={item} />;
		}}
		/>
		</View>
	);
};

const styles = StyleSheet.create(
	{
		title: {
			fontSize: 18,
			fontWeight: 'bold',
			marginLeft: 15,
			marginBottom: 5
		},
		container: {
    		marginBottom: 10
 		}
	}
);

export default ResultsList;