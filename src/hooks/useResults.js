import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMsg] = useState('');

  const searchApi = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'san jose'
        }
      });
      setResult(response.data.businesses);
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
