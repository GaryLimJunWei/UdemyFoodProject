import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * Using async and await makes the request async, hence user will not hang there
     * while there is a connection problem and improves the user experience.
     * 
     * when using the get method, it is simply using the base url and add the query behind it.
     * 
     * adding the params is to add more query behind the base URL to filter the search.
     * 
     * We use the try-catch block to catch any types of error the user may face.
     */

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('./search', {
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


    /**
     * The condition below: 
     * If there is an errorMessage then display errormessage, 
     * ELSE display null
     */

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
};