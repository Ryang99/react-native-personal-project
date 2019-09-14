/** 
* This file makes request to Yelp for our APP
* author: Ruiyang Guo
* version:1
*08/28/2019
*/
import axios from 'axios';

export default axios.create({
	// root url
	baseURL: 'https://api.yelp.com/v3/businesses',
	// authorize myself
	headers: {
		Authorization: 
		'Bearer JbsSSAMxLMFvAVlyOI8nDe3ozf9FYoUYE6nk1-t-iPGCaVoj-sqB1jVXryPXXKd3zu4cwPbx0Ng80ujv712YQZaYavde5AMfG4CogmQfWEsG3v0TB3mkClAm8DN8XXYx'
	}
});

