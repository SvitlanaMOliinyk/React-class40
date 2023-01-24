import { useState, useEffect } from "react";

function useFetchMany(...urls) {
    const [data, setData] = useState([])
    // const [query, setQuery] = useState(initialUrl);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    console.log("urls: ", urls);
    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true)
              try {
                // const response = await fetch(urls[0]);
                const requests = urls.map(url => fetch(url))
                console.log('FetchPromis', requests)
                const responses = await Promise.all(requests)
                console.log("responses: ", responses);
                const results = await responses[0].json()
                
                console.log("result", results)
              
      
                setData(results);
                // setIsLoading(false)
              } catch (error) {
                  console.log("Error", error.message);
                //   setIsLoading(false)
                //   setError("Download is failed")
                } 
              }
             getProduct();
      
            }, [urls]) 
    return { data, isLoading, error }
  };
  
  export default useFetchMany;