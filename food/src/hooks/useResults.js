/** 
* This file is my own hook created for searching 
* @author: Ruiyang Guo
* @version:1
* @data: 09/02/2019
*/
import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default() => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	// helper function for making API request by accessing 'search' route
	const searchApi = async () => {
		console.log('hi there');
		try {
			const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term: searchTerm,
				location: 'san jose'
			}
		});
		setResults(response.data.businesses);
	} catch (err) {
		setErrorMessage('Something went wrong');
		}
	};
	// only call API once
	useEffect(() => {
		searchApi('pasta');
	}, [])

	return [searchApi, results, errorMessage]; 
};