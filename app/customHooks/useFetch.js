import { useState, useEffect } from "react"

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.entries);
                setData(data.entries);
            })
            .catch( (error) => setError(error) )
            .finally( () => setIsLoading(false) );
    }, []);

    return { data, isLoading, error };
}