import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const [data, setData] = useState(null);

    useEffect(() => {

        const abortErr = new AbortController();

        fetch(url, {signal: abortErr.signal})
            .then(res => {
               if(!res.ok) {
                   throw Error('Could not fetch the data for that result')
               }
               return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setIsLoading(false)
                    setError(err.message);
                }
            })
            return () => abortErr.abort();
    },[]);

    return {data, isLoading, error}
}

export default useFetch